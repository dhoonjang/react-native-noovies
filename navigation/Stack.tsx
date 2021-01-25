import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute, Route } from "@react-navigation/native";
import Detail from "../screens/Detail";

import Tabs from "./Tabs";

const Stack = createStackNavigator();

export function getHeaderTitle(route: Route<"Tab", object | undefined>) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Movies";

  return routeName;
}

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
        borderBottomColor: "black",
        shadowColor: "black",
      },
      headerTintColor: "white",
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
      name="Tab"
      component={Tabs}
      options={({ route }) => ({
        headerTitle: getHeaderTitle(route),
      })}
    />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
