import React from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

import RowText from "../components/RowText";

import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherConditions = weather[0]?.main;

  return (
    <View
      style={{
        ...wrapper,
        backgroundColor: weatherType[weatherConditions]?.backgroundColor,
      }}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherConditions]?.icon}
          size={100}
          color="#00ced1"
        />
        <Text style={tempStyles}>{`${Math.round(temp)}°`}</Text>
        <Text style={feels}>{`Feels like ${Math.round(feels_like)}°`}</Text>
        <RowText
          messageOne={`High: ${Math.round(temp_max)}°`}
          messageTwo={`Low: ${Math.round(temp_min)}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherConditions]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyles: {
    color: "#00ced1",
    fontSize: 48,
  },
  feels: {
    color: "#00ced1",
    fontSize: 30,
  },
  highLow: {
    color: "#00ced1",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
    color: "#00ced1",
  },
  message: {
    fontSize: 25,
    color: "#00ced1",
  },
});

export default CurrentWeather;
