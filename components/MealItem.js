import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (<View style={styles.mealItem}>
    <TouchableOpacity onPress={props.onSelectMeal}>
      <View>
        <View style={styles.mealRow}>
          <Text>{props.title}</Text>
        </View>
        <View style={styles.mealRow}></View>
      </View>
    </TouchableOpacity>
  </View>)
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mealItem:{
    width: '100%',
    height: 200,
    backgroundColor: '#ccc'
  },
  mealRow: {
    flexDirection: "row",
  },
});

export default MealItem;
