'use server';

import { redirect } from "next/navigation";
import { SaveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInValid(text){
  return !text || text.trim() === ''
}
export async function shareMeal(prevState,formData) {
  const imageFile = formData.get('image')

  const fileBuffer = await imageFile.arrayBuffer()
  const image = {
    buffer:Buffer.from(fileBuffer),
    mimeType:imageFile.type
  }
    const meal = {
      title:formData.get('title'),
      summary:formData.get('summary'),
      instructions:formData.get('instructions'),
      image,
      creator:formData.get('name'),
      creator_email:formData.get('email')
    }

    if(isInValid(meal.title) || isInValid(meal.summary) || isInValid(meal.creator) || isInValid(meal.creator_email) || isInValid(meal.instructions) || !meal.creator_email.includes('@')){
      return {
        message:'Invalid Input.'
      }
    }
   await SaveMeal(meal);
   revalidatePath('/meals')
   redirect('/meals')
    
}