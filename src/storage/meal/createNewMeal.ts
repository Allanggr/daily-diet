import AsyncStorage from '@react-native-async-storage/async-storage';
import { Meal, MEALS_COLLECTION } from '@storage/storage.config';
import { getAllMeals } from './getAllMeals';
import { orderMealsByHour } from '@utils/orderMealsByHour';
import { orderMealGroupsByDate } from '@utils/orderMealsByDate';

export const addNewMeal = async (meal: Meal) => {
    try {
        const storedMeals = await getAllMeals();
        const dateGroupAlreadyExists = storedMeals.filter((storedMeal) => storedMeal.title === meal.date);

        if(dateGroupAlreadyExists.length > 0) {
            const newMealGroups = storedMeals.map((storedMeal) => {
                if(storedMeal.title === meal.date) {
                    const mealGroupOdered = orderMealsByHour([...storedMeal.data, meal]);

                    return {
                        title: storedMeal.title,
                        data: mealGroupOdered
                    }
                } else {
                    return storedMeal;
                }
            });

            await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(newMealGroups));
        } else {
            const newMealGroup = {
                title: meal.date,
                data: [meal]
            }
            const newMealGroups = orderMealGroupsByDate([...storedMeals, newMealGroup]);

            await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(newMealGroups));
        }
    }catch (error) {
        throw error;
    }
}