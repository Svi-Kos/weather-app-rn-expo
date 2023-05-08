import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props;
  const { container, textTheme, shadow } = styles;

  return (
    <View style={container}>
      <View style={shadow}>
        <Feather name={iconName} size={50} color={iconColor} />
      </View>

      <Text style={{ ...textTheme, ...bodyTextStyles }}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  textTheme: {
    fontWeight: "bold",
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 20,
    borderRadius: 60,
    padding: 10,
  },
});

export default IconText;
