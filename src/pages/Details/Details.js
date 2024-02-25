import React from 'react';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import MealDetailsCard from '../../components/MealDetailsCard';
import {FlatList, View} from 'react-native';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
const Details = ({route}) => {
  const mealId = route.params.id;
  const {data, loading, error} = useFetch(
    Config.API_URL + 'lookup.php?i=' + mealId,
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const renderMealDetails = ({item}) => <MealDetailsCard meal={item} />;
  return <FlatList data={data.meals} renderItem={renderMealDetails} />;
};

export default Details;
