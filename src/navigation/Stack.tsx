import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute, Route } from "@react-navigation/native";
import Detail from "../screens/Detail";
import AddForm from "../screens/AddForm";

import Tabs from "./Tabs";

const Stack = createStackNavigator();

export function getHeaderTitle(route: Route<"Tab", object | undefined>) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Main";

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
    <Stack.Screen name="AddForm" component={AddForm} />
  </Stack.Navigator>
);
