import Image from 'next/image'
import classes from './page.module.css'
import { GetMeal } from '@/app/lib/meals'
import { notFound } from 'next/navigation'

export default async function MealDetailsPage({params}){

    const meal = await GetMeal(params.mealSlug)
    console.log(meal);
    
    if(!meal){
        notFound()
    }
    meal[0].instructions = meal.map((m)=>m.instructions = m.instructions.replace(/\n/g,'<br />'))
    return <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={meal[0].image} fill alt={meal[0].title}></Image>
            </div>
            <div className={classes.headerText}>
                <h1>{meal[0].title}</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${meal[0].creator_email}`}>made by You</a>
                </p>
                <p className={classes.summary}>{meal[0].summary}</p>
            </div>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{
                __html: meal[0].instructions,
            }}></p>
        </main>
    </>
}