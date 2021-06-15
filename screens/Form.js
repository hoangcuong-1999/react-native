import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../global/globalStyles";
import Button from "../shared/Button";
import * as yup from "yup";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Must be a number 1- 5", (val) => {
      return parseInt(val) > 0 && parseInt(val) < 6;
    }),
});

const Form = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => addReview(values)}
        validationSchema={reviewSchema}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            <Text style={styles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={styles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Rating"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={styles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            <Button
              text="Submit"
              style={styles.btn}
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRadius: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  errorText: {
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
  },
});
