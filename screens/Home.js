import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../global/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../shared/Card";
import Form from "./Form";

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePress = (key) => {
    setReviews((prev) => prev.filter((item) => item.key !== key));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prev) => [review, ...prev]);
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialCommunityIcons
              name="close"
              size={24}
              color="black"
              style={{ ...styles.addIcon, ...styles.closeIcon }}
              onPress={closeModal}
            />
            <Form addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialCommunityIcons
        name="plus"
        size={24}
        color="black"
        style={styles.addIcon}
        onPress={openModal}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Card>
              <View style={styles.listItem}>
                <Text style={{ fontFamily: "DancingScript_700Bold" }}>
                  {item.title}
                </Text>
                <MaterialCommunityIcons
                  name="trash-can"
                  size={24}
                  color="black"
                  onPress={() => handlePress(item.key)}
                />
              </View>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addIcon: {
    alignSelf: "center",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  closeIcon: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
