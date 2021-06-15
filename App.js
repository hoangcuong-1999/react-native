import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Drawer from "./routes/Drawer";
import {
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold,
} from "@expo-google-fonts/dancing-script";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded, error] = useFonts({
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Drawer />;
}

const styles = StyleSheet.create({});
