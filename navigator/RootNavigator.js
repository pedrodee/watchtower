import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ConsoleScreen } from "../screens/ConsoleScreen";
import { DemoScreen } from "../screens/DemoScreen";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Console">
                <Stack.Screen
                    name="Console"
                    component={ConsoleScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="DemoScreen"
                    component={DemoScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}