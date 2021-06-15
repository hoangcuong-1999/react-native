import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="GameZone" />
          ),
          headerBackground: () => (
            <Image
              source={require("../assets/game_bg.png")}
              style={{ height: "100%" }}
            />
          ),
        }}
      />
      <Screen name="Details" component={ReviewDetails} />
    </Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
