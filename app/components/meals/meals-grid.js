import MealItem from './meal-item'
import classes from './meals-grid.module.css'

export default function MealsGrid({meals}){
    return <ul className={classes.meals}>
        {meals.length >0 ? meals.map(meal=><li key={meal.id}>
            <MealItem {...meal}></MealItem>
        </li>) : <div className={classes.para}><h1 style={{color:'white'}}>No Meals Found</h1></div>}
    </ul>
}