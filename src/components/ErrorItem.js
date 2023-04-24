import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMsg}>Sorry... Something went wrong!</Text>
      <Feather name="frown" size={100} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorMsg: {
    fontSize: 30,
    color: "red",
    marginHorizontal: 10,
    textAlign: "center",
  },
});

export default ErrorItem;
