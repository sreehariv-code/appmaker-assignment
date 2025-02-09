import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import "react-native-reanimated";

import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { ProductProvider } from "@/context/useProduct/context";
import React from "react";

import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Manrope-Bold": require("../assets/fonts/Manrope/Manrope-Bold.ttf"),
    "Manrope-ExtraBold": require("../assets/fonts/Manrope/Manrope-ExtraBold.ttf"),
    "Manrope-ExtraLight": require("../assets/fonts/Manrope/Manrope-ExtraLight.ttf"),
    "Manrope-Light": require("../assets/fonts/Manrope/Manrope-Light.ttf"),
    "Manrope-Medium": require("../assets/fonts/Manrope/Manrope-Medium.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope/Manrope-Regular.ttf"),
    "Manrope-SemiBold": require("../assets/fonts/Manrope/Manrope-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductProvider>
        <>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen
              name="reviewmodal"
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen name="seemore" />
          </Stack>
          <StatusBar style="dark" />
        </>
      </ProductProvider>
    </SafeAreaView>
  );
}
