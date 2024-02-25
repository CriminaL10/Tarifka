import React from 'react';
import {View, FlatList} from 'react-native';
import MealCard from '../../components/MealCard';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
const Meals = ({navigation, route}) => {
  const category = route.params.category;

  const {data, loading, error} = useFetch(
    Config.API_URL + 'filter.php?c=' + category,
  );

  const handleMeal = id => {
    navigation.navigate('Detail', {id});
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const renderMeals = ({item}) => (
    <View>
      <MealCard
        data={item}
        onSelect={() => {
          handleMeal(item.idMeal);
        }}
      />
    </View>
  );

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
};

export default Meals;
