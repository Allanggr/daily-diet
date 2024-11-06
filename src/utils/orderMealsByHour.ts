import { Meal } from "@storage/storage.config";

export const orderMealsByHour = (meals: Meal[]) => {
  const orderedMeals = meals.sort((a, b) => {
    const aTimeFormatted = parseInt(a.hour.replace(":", ""));
    const bTimeFormatted = parseInt(b.hour.replace(":", ""));

    return aTimeFormatted - bTimeFormatted;
  });

  return orderedMeals;
};