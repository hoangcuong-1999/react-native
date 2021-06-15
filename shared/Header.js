import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        style={styles.icon}
        name="menu"
        size={28}
        onPress={openMenu}
      />
      <View style={styles.headerLogo}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    left: 16,
  },
  headerLogo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});
