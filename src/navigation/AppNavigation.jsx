import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./RootNavigation"

import SignIn from "../screens/LogIn";
import Dashboard from "../screens/Dashboard";

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const AppNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme} ref={navigationRef}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigation;
