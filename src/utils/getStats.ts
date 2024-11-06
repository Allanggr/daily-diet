import { getAllMeals } from "@storage/meal/getAllMeals";

export interface StatsProps {
    numberOfMeals: number;
    isDietPositive: boolean;
    numberOfMealsOutDiet: number;
    percentageOfMealsInDiet: string;
    bestSequenceOfMealsInDiet: number;
}

export const getStats = async () => {
  const mealGroups = await getAllMeals();

  const numberOfMeals = mealGroups.reduce(
    (accumulator, mealGroup) => accumulator + mealGroup.data.length,
    0
  );

  const numberOfMealsOutDiet = mealGroups.reduce((accumulator, mealGroup) => {
    const mealsOutDiet = mealGroup.data.reduce((accumulator, meal) => {
      if (!meal.inDiet) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);

    return accumulator + mealsOutDiet;
  }, 0);

  const percentageOfMealsInDiet = (
    100 -
    (numberOfMealsOutDiet / numberOfMeals) * 100
  )
    .toFixed(2)
    .toString();

  const bestSequenceOfMealsInDiet = mealGroups.reduce((accumulator, mealGroup) => {
    const mealsOutDiet = mealGroup.data.reduce((accumulator, meal) => {
      if (meal.inDiet) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);

    return accumulator + mealsOutDiet;
  }, 0);

  const isDietPositive =
    parseFloat(percentageOfMealsInDiet) > 50 ? true : false;

  return {
    numberOfMeals,
    isDietPositive,
    numberOfMealsOutDiet,
    percentageOfMealsInDiet:
      percentageOfMealsInDiet === "NaN" ? "0" : percentageOfMealsInDiet,
    bestSequenceOfMealsInDiet,
  } as StatsProps;
};