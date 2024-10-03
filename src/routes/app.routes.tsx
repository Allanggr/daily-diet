import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";
import { Create } from "@screens/Create";
import { Details } from "@screens/Details";
import { Feedback } from "@screens/Feedback";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="Home" component={Home} />
            <Screen name="Statistics" component={Statistics} />
            <Screen name="Create" component={Create} />
            <Screen name="Details" component={Details} />
            <Screen name="Feedback" component={Feedback} />
        </Navigator>
    );
}