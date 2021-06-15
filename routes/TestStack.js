import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Test from "../screens/Test";

const { Navigator, Screen } = createStackNavigator();

const TestStack = () => {
  return (
    <Navigator>
      <Screen name="Test" component={Test} />
    </Navigator>
  );
};

export default TestStack;

const styles = StyleSheet.create({});
