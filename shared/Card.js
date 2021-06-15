import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 0.6,
  },
});
