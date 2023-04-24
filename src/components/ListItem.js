import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import { weatherType } from "../utilities/weatherType";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;

  const { item, date, temp } = styles;

  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color="#2f4f4f" />
      <View style={styles.dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>

      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#2f4f4f",
    backgroundColor: "#afeeee",
  },
  temp: {
    color: "#2f4f4f",
    fontSize: 20,
  },
  date: {
    color: "#2f4f4f",
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
});

export default ListItem;
