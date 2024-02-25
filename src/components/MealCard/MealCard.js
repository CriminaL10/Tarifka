import React from 'react';
import {View, TouchableWithoutFeedback, Text, Image} from 'react-native';
import styles from './MealCard.styles';

const MealCard = ({data, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{uri: data.strMealThumb}} style={styles.image} />
        <Text style={styles.title}>{data.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default MealCard;
