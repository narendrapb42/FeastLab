'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInValid(text){
  return !text || text.trim() === ''
}
export async function shareMeal(prevState,formData) {
    const meal = {
      title:formData.get('title'),
      summary:formData.get('summary'),
      instructions:formData.get('instructions'),
      image:formData.get('image'),
      creator:formData.get('name'),
      creator_email:formData.get('email')
    }

    if(isInValid(meal.title) || isInValid(meal.summary) || isInValid(meal.creator) || isInValid(meal.creator_email) || isInValid(meal.instructions) || !meal.creator_email.includes('@')){
      return {
        message:'Invalid Input.'
      }
    }
   await saveMeal(meal);
   revalidatePath('/meals')
   redirect('/meals')
    
}