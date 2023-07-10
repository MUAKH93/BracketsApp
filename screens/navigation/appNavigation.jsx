import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../login/login";
import Register from "../register/register";

function AppNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={{ flex: 1, backgroundColor: "green" }}>
      <Stack.Navigator
        style={{ flex: 1, backgroundColor: "green" }}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { AppNavigator };
