import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "../components/HeaderButton";

const FilterScreen = (props) => {

  const [isGlutenFree, setIsGlutenFree] = useState();
  const [isVegan, setIsVegan] = useState();
  const [isVegeterian, setIsVegeterian] = useState();
  const [isLactoseFree, setIsLactoseFree] = useState();

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filters</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Gluten-free</Text>
        <Switch value={isGlutenFree} onValueChange={newValue=> setIsGlutenFree(newValue)}/>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Vegan</Text>
        <Switch value={isVegan} onValueChange={newValue=> setIsVegan(newValue)}/>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Vegetarian</Text>
        <Switch value={isVegeterian} onValueChange={newValue=> setIsVegeterian(newValue)}/>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Lactose-free</Text>
        <Switch value={isLactoseFree} onValueChange={newValue=> setIsLactoseFree(newValue)}/>
      </View>
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
    marginVertical: 10
  },
  filterContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  filterLabel: {
    fontFamily: 'open-sans',
    fontSize: 16
  }
});

export default FilterScreen;
