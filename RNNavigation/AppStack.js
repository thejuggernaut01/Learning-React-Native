import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6a51ae",
        },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerRight: () => {
          <Pressable onPress={() => alert("Menu button pressed!")}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
          </Pressable>;
        },
        contentStyle: {
          backgroundColor: "#e8e4f3",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Welcome back",
        }}
      />

      <Stack.Screen
        name="About"
        component={AboutScreen}
        initialParams={{
          otherName: "Guest",
        }}
        // options={({ route }) => ({
        //   title: route.params.name,
        // })}
      />
    </Stack.Navigator>
  );
};

export default function AppStack() {
  return (
    <NavigationContainer>
      <AboutStack />
    </NavigationContainer>
  );
}
