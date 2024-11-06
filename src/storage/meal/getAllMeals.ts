import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storage.config";
import { MealGroup } from "@storage/storage.config";

export const getAllMeals = async () => {
    try {
        const meals = await AsyncStorage.getItem(MEALS_COLLECTION);
        const parsedMeals: MealGroup[] = meals ? JSON.parse(meals) : [];
        return parsedMeals;
    } catch (error) {
        console.log("error", error);
        throw error;
    }
};