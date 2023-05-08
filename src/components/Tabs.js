import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather, orientation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#2f4f4f",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: { backgroundColor: "#E3F5FF" },
        headerStyle: { backgroundColor: "#E3F5FF" },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "#2f4f4f",
        },
      }}
    >
      <Tab.Screen
        name={"Current"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "#2f4f4f" : "grey"}
            />
          ),
        }}
      >
        {() => (
          <CurrentWeather
            weatherData={weather.list[0]}
            orientation={orientation}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name={"Upcoming"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? "#2f4f4f" : "grey"}
            />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={"City"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "#2f4f4f" : "grey"}
            />
          ),
        }}
      >
        {() => <City weatherData={weather.city} orientation={orientation} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
