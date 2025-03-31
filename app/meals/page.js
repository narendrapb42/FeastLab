import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '../components/meals/meals-grid'
import { GetMeals } from '../lib/meals'
import { Suspense } from 'react'

async function Meals(){
    const meals = await GetMeals()
    console.log(meals);
    if(meals.length!==0){
        return <MealsGrid meals={meals}/>
    }
   else{
    return <p style={{color:'white',textAlign:'center'}}>No Meals Found. Try adding one!</p>
   }
}


export default function MealsPage(){
    
    return <>
        <header className={classes.header}>
            <h1>Delicious meals, created <span className={classes.highlight}>by you</span></h1>
            <p>Choose your favorite recipes and cook it yourself, It is easy and fun!</p>
            <p className={classes.cta}>
                <Link href="/meals/share">Share your favorite recipe</Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Fetching Meals..</p>}>
                <Meals/>
            </Suspense>
        </main>
    </>
}