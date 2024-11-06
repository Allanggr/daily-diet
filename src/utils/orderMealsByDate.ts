import { MealGroup } from "@storage/storage.config";
import { formatDate } from "./formatDate";

export const orderMealGroupsByDate = (mealGroups: MealGroup[]) => {
  const orderedGroups = mealGroups.sort((a, b) => {
    return new Date(formatDate(b.title)).getTime() - new Date(formatDate(a.title)).getTime();
  });

  return orderedGroups;
};