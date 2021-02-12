import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./src/navigation/Stack";

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);

  const loadAssets = async () => {
    /*
    const images = [require("./assets/splash.png")];
    const fonts = [Ionicons.font];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    const cacheFonts = fonts.map((font) => {
      return Font.loadAsync(font);
    });

    await Promise.all(cacheFonts);
    await Promise.all(cacheImages);
    */
    await Font.loadAsync(Ionicons.font);

    return;
  };

  const onFinish = () => {
    setIsReady(true);
  };

  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
