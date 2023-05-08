import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as ScreenOrientation from "expo-screen-orientation";

import { NavigationContainer } from "@react-navigation/native";

import { useGetWeather } from "./src/hooks/useGetWeather";

import Tabs from "./src/components/Tabs";
import ErrorItem from "./src/components/ErrorItem";

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [orientation, setOrientation] = useState(null);
  const [loading, error, weather] = useGetWeather();

  useEffect(() => {
    checkOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener(
      handleOrientationChange
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListeners(subscription);
    };
  }, []);
  const checkOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    setOrientation(orientation);
  };
  const handleOrientationChange = (o) => {
    setOrientation(o.orientationInfo.orientation);
  };

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <StatusBar style="auto" backgroundColor="#2f4f4f" />
        <Tabs weather={weather} orientation={orientation} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
