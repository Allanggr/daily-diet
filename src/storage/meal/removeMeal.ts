import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION, Meal } from "@storage/storage.config";

import { getAllMeals} from "./getAllMeals";

export const removeMeal = async (newMeal: Meal) => {
  try {
    console.log("newMeal", newMeal);
    const storedMealGroups = await getAllMeals();

    const newMealGroups = storedMealGroups.map((group) => {
      if (group.title === newMeal.date) {
        const newMeals = group.data.filter((meal) => meal.id !== newMeal.id);

        return {
          title: group.title,
          data: newMeals,
        };
      } else {
        return group;
      }
    });

    const removeEmptyGroups = newMealGroups.filter(
      (group) => group.data.length > 0
    );
    console.log('newMealGroups', newMealGroups)
    await AsyncStorage.setItem(
      MEALS_COLLECTION,
      JSON.stringify(removeEmptyGroups)
    );
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};