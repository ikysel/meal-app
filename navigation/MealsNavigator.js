import React from "react";

import { createStackNavigator, HeaderTitle } from "react-navigation-stack";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoritesScreen";
import FilersScreen from "../screens/FiltersScreen";

import Colors from "../constans/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTitleStyle: { fontFamily: "open-sans-bold" },
  headerTintColor: "white",
};

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
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    screen: FavoriteScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenNavigator = {
  Meal: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
    },
  },
};

const MealFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenNavigator, {
        activeTintColor: Colors.accentColor,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenNavigator, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FilersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(MainNavigator);
