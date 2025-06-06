import fs from 'node:fs'
import slugify from 'slugify'
import xss from 'xss'
import { MongoClient } from 'mongodb'
import AWS from 'aws-sdk'
import multer from 'multer'
import dotenv from 'dotenv'

dotenv.config()

// export async function getMeals(){
//     await new Promise((resolve)=>setTimeout(resolve,2000))
//     return db.prepare('SELECT * FROM meals').all()
// }

//S3 Config

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
})

const upload = multer({storage:multer.memoryStorage()})


export async function  GetMeals() {
    const connection = MongoClient.connect(process.env.MONGO_URL)
    const db = (await connection).db()
    const mealsCollection = db.collection('meals')

    return mealsCollection.find({}).toArray()
}

// export function getMeal(slug) {
//     return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
// }
export async function GetMeal(slug){
    const connection = MongoClient.connect(process.env.MONGO_URL)
    const db = (await connection).db()
    const mealsCollection = db.collection('meals')

    return mealsCollection.find({slug}).toArray()
    }

export async function SaveMeal(meal){
    meal.slug = slugify(meal.title,{lower: true})
    meal.instructions = xss(meal.instructions)

    // const extension = meal.image.name.split('.').pop()
    // const fileName = `${meal.slug}.${extension}`

    const params = {
        Bucket:'mealsbucketfeastlab',
        Key: `${meal.slug}.jpg`,
        Body: meal.image.buffer,
        ContentType: meal.image.mimetype
    }

    const uploadResult = await s3.upload(params).promise();
    meal.image = uploadResult.Location;
    // const stream = fs.createWriteStream(`public/images/${fileName}`)
    // const bufferedImage = await meal.image.arrayBuffer()
    
    // stream.write(Buffer.from(bufferedImage), (err)=>{
    //     if(err){
    //         throw new Error('Saving Image Failed!')
    //     }
    // })

    // meal.image = `/images/${fileName}`

    const connection = MongoClient.connect(process.env.MONGO_URL)
    const db = (await connection).db()
    const mealsCollection = db.collection('meals')

    const result = await mealsCollection.insertOne(meal)

    console.log(result);
    
}

// export async function saveMeal(meal){
    
//     //Preprations
//     meal.slug = slugify(meal.title,{lower: true})
//     meal.instructions = xss(meal.instructions)

//     const extension = meal.image.name.split('.').pop()
//     const fileName = `${meal.slug}.${extension}`

//     const stream = fs.createWriteStream(`public/images/${fileName}`)
//     const bufferedImage = await meal.image.arrayBuffer()
    
//     stream.write(Buffer.from(bufferedImage), (err)=>{
//         if(err){
//             throw new Error('Saving Image Failed!')
//         }
//     })

//     meal.image = `/images/${fileName}`

//     //Saving
//     db.prepare(`
//         INSERT INTO meals
//            (title, summary, instructions, creator, creator_email, image, slug)
//         VALUES(
//             @title,
//             @summary,
//             @instructions,
//             @creator,
//             @creator_email,
//             @image,
//             @slug
//         )
//         `).run(meal)
// }