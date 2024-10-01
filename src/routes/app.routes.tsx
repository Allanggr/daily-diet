import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";
import { Create } from "@screens/Create";
import { Details } from "@screens/Details";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="Home" component={Home} />
            <Screen name="Statistics" component={Statistics} />
            <Screen name="Create" component={Create} />
            <Screen name="Details" component={Details} />
        </Navigator>
    );
}