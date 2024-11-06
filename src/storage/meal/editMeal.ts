import { Meal } from "@storage/storage.config";

import { removeMeal } from "./removeMeal";
import { addNewMeal } from "./createNewMeal";

export const editMeal = async (meal: Meal, newMeal: Meal) => {
  try {
    await removeMeal(meal);
    await addNewMeal(newMeal);
  } catch (error) {
    throw error;
  }
};