import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import TestStack from "./TestStack";

const { Navigator, Screen } = createDrawerNavigator();

const Drawer = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeStack} />
        <Screen name="About" component={AboutStack} />
        <Screen name="Test" component={TestStack} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
