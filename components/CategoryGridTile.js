import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableCMP = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCMP = TouchableNativeFeedback;
  }
  return (
    <TouchableCMP style={{ flex: 1 }} onPress={props.onSelected}>
      <View style={{ ...styles.itemGrid, backgroundColor: props.color }}>
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableCMP>
  );
};

const styles = StyleSheet.create({
  itemGrid: {
    flex: 1,
    margin: 15,
    height: 150,
    borderWidth: 2,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "#ccc",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 18,
    textAlign: "right",
    fontFamily: 'open-sans-bold'
  },
});

export default CategoryGridTile;
