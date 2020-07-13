import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "../components/HeaderButton";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterLabel}>{props.label}</Text>
      <Switch value={props.state} onValueChange={props.onChange} />
    </View>
  );
};

const FilterScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState();
  const [isVegan, setIsVegan] = useState();
  const [isVegeterian, setIsVegeterian] = useState();
  const [isLactoseFree, setIsLactoseFree] = useState();

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filters</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegeterian}
        onChange={(newValue) => setIsVegeterian(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter meal",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    marginVertical: 10,
  },
  filterContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  filterLabel: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
});

export default FilterScreen;
