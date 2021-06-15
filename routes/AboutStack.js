import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../shared/Header";

const { Navigator, Screen } = createStackNavigator();

const AboutStack = ({ navigation }) => {
  return (
    <Navigator>
      <Screen
        name="About GameZone"
        component={About}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="About GameZone" />
          ),
          headerBackground: () => (
            <Image
              source={require("../assets/game_bg.png")}
              style={{ height: "100%" }}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default AboutStack;

const styles = StyleSheet.create({});
