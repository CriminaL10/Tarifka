import React from 'react';
import {View, Text, Image, Pressable, Linking} from 'react-native';
import styles from './MealDetailsCard.styles';

const MealDetailsCard = ({meal}) => {
  //   const {meals} = meal;
  console.log(meal);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: meal.strMealThumb}} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.area}>{meal.strArea}</Text>
      </View>
      <Text style={styles.description}>{meal.strInstructions}</Text>
      <Pressable
        style={styles.press}
        onPress={() => {
          Linking.openURL(meal.strYoutube);
        }}>
        <Text style={styles.pressText}>Watch On Youtube</Text>
      </Pressable>
    </View>
  );
};

export default MealDetailsCard;
