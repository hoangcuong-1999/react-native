import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from "react-native";
import { globalStyles } from "../global/globalStyles";

const Test = () => {
  const DATA = [
    {
      title: "Title 1",
      data: ["Item 1-1", "Item 1-2", "Item 1-3"],
    },
    {
      title: "Title 2",
      data: ["Item 2-1", "Item 2-2"],
    },
    {
      title: "Title 3",
      data: ["Item 3-1"],
    },
  ];

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderSectionHeader={({ section }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      renderItem={({ item }) => <Text style={styles.darkColor}>{item}</Text>}
    />
  );
};

export default Test;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 35,
    color: "#fff",
  },
  darkColor: {
    color: "#333",
    fontSize: 35,
  },
});
