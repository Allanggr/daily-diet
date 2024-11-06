const MEALS_COLLECTION = '@daily-diet:meals';

interface MealGroup {
    title: string;
    data: Meal[];
}

interface Meal {
    name: string;
    description: string;
    date: string;
    hour: string;
    inDiet: boolean;
    id: string | number;
}

export { MEALS_COLLECTION, Meal, MealGroup };