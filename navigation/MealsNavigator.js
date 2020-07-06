import React from 'react';

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoritesScreen";

import Colors from "../constans/Colors";
import { Ionicons } from "@expo/vector-icons";

const MealsNavigator = createStackNavigator(
  {
    Catigories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
      },
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const MealFavTabNavigator = createBottomTabNavigator({
  Meal: {screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo)=> {
      return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
    }
  }},
  Favorites: {screen: FavoriteScreen, navigationOptions: {
    tabBarIcon: (tabInfo)=> {
      return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
    }
  }}
}, {
  tabBarOptions: {
    activeTintColor: Colors.accentColor
  }
});

export default createAppContainer(MealFavTabNavigator);
