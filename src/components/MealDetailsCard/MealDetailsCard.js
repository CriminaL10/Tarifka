import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
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
    </View>
  );
};

export default MealDetailsCard;
