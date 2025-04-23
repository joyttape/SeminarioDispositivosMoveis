import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LessonsScreen from "../screens/LessonsScreen";
import DemoScreen from "../screens/DemoScreen";
import WhatIsScreen from "../screens/WhatIsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Boas-vindas" }}
        />
        <Stack.Screen
          name="Lessons"
          component={LessonsScreen}
          options={{ title: "Lições" }}
        />
        <Stack.Screen
          name="Demo"
          component={DemoScreen}
          options={{ title: "Demonstração" }}
        />

        <Stack.Screen
          name="WhatIs"
          component={WhatIsScreen}
          options={{ title: "O que é?" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
