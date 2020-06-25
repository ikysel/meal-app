import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories screen</Text>
      <Button title="Go to MealDetail Screen" onPress={()=>{
        props.navigation.navigate({ routeName: 'MealDetail'})
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;