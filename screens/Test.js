import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  Alert,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { globalStyles } from "../global/globalStyles";

const Test = () => {
  const onPress = () => {
    // Alert.alert(
    //   "Warning",
    //   "Text input must be over 3 chars",
    //   [
    //     {
    //       text: "Do not show again",
    //       onPress: () => console.warn("Do not show again"),
    //     },
    //     { text: "OK", onPress: () => console.warn("OK pressed!") },
    //   ],
    //   { cancelable: true }
    // );
    ToastAndroid.showWithGravity(
      "Tada! here i am !",
      ToastAndroid.LONG,
      ToastAndroid.TOP
    );
  };

  return (
    <View style={[globalStyles.container, { alignItems: "center" }]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
