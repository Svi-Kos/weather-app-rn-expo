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

const City = ({ weatherData }) => {
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
        <View style={{ ...populationWrapper, ...rowLayout }}>
          <IconText
            iconName={"user"}
            iconColor={"#2f4f4f"}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={{ ...riseSetWrapper, ...rowLayout }}>
          <IconText
            iconName={"sunrise"}
            iconColor={"#00ced1"}
            bodyText={moment(sunrise).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"#00ced1"}
            bodyText={moment(sunset).format("h:mm:ss a")}
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
    color: "#2f4f4f",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "#2f4f4f",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "#00ced1",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
