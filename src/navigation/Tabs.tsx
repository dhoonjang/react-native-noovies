import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calendar from "../screens/Calendar";
import FactorHistory from "../screens/FactorHistory";
import FactorList from "../screens/FactorList";
import Main from "../screens/Main";

import { getHeaderTitle } from "./Stack";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default ({ route, navigation }: any) => {
  useLayoutEffect(() => {
    const title = getHeaderTitle(route);

    navigation.setOptions({
      title,
      // headerShown: title !== "TV",
    });
  }, [route]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName:
            | "ios-home"
            | "ios-bar-chart"
            | "ios-list"
            | "ios-calendar" = "ios-home";

          if (route.name === "FactorHistory") {
            iconName = "ios-bar-chart";
          } else if (route.name === "FactorList") {
            iconName = "ios-list";
          } else if (route.name === "Calendar") {
            iconName = "ios-calendar";
          }

          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          shadowColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="Main" component={Main} />
      <Tabs.Screen name="Calendar" component={Calendar} />
      <Tabs.Screen name="FactorHistory" component={FactorHistory} />
      <Tabs.Screen name="FactorList" component={FactorList} />
    </Tabs.Navigator>
  );
};
