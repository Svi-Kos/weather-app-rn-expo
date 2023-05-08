import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import moment from "moment";

import IconText from "../components/IconText";

const City = ({ weatherData, orientation }) => {
  const {
    container,
    imageLayout,
    cityText,
    populationWrapper,
    rowLayout,
    populationText,
    riseSetWrapper,
    riseSetText,
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;

  return (
    <View style={container}>
      <ImageBackground
        source={require("../../assets/city-background.jpg")}
        style={imageLayout}
      >
        <Text style={{ ...cityText, fontSize: 40 }}>{name}</Text>
        <Text style={{ ...cityText, fontSize: 30 }}>{country}</Text>
        {(orientation === 1 || orientation === 2) && (
          <View style={{ ...populationWrapper, ...rowLayout }}>
            <IconText
              iconName={"user"}
              iconColor={"white"}
              bodyText={`Population: ${population}`}
              bodyTextStyles={populationText}
            />
          </View>
        )}

        <View style={{ ...riseSetWrapper, ...rowLayout }}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise * 1000).format("h:mm a")}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(sunset * 1000).format("h:mm a")}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 25,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
