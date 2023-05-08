import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";

import RowText from "../components/RowText";

import { weatherType } from "../utilities/weatherType";
import { getImage } from "../utilities/getImage";

const CurrentWeather = ({ weatherData, orientation }) => {
  const {
    wrapper,
    containerPortrait,
    containerLandscape,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
    image,
    shadow,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherConditions = weather[0]?.main;

  return (
    <View style={wrapper}>
      <ImageBackground source={getImage(weatherConditions)} style={image}>
        <View
          style={
            orientation === 3 || orientation === 4
              ? containerLandscape
              : containerPortrait
          }
        >
          <View style={shadow}>
            <Feather
              name={weatherType[weatherConditions]?.icon}
              size={100}
              color="white"
            />
          </View>

          <Text style={tempStyles}>{`${Math.round(temp)}°`}</Text>
          <Text style={feels}>{`Feels like ${Math.round(feels_like)}°`}</Text>
          {(orientation === 1 || orientation === 2) && (
            <RowText
              messageOne={`High: ${Math.round(temp_max)}°`}
              messageTwo={`Low: ${Math.round(temp_min)}°`}
              containerStyles={highLowWrapper}
              messageOneStyles={highLow}
              messageTwoStyles={highLow}
            />
          )}
        </View>
        <RowText
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherConditions]?.message}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  containerPortrait: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLandscape: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 30,
  },
  tempStyles: {
    fontSize: 48,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
    marginRight: 30,
    marginLeft: 30,
  },
  feels: {
    fontSize: 30,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
  highLow: {
    fontSize: 20,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
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

    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
  message: {
    fontSize: 25,

    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
  image: {
    flex: 1,
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

export default CurrentWeather;
