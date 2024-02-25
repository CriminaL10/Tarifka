import React from 'react';
import {View, FlatList} from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import useFetch from '../../hooks/useFetch';
import {Config} from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
  const {data, error, loading} = useFetch(Config.API_URL + 'categories.php');
  // const [list, setList] = useState([]);
  const handleCategory = category => {
    navigation.navigate('Meals', {category});
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const renderCategories = ({item}) => (
    <CategoryCard
      categoryItem={item}
      onSelect={() => {
        handleCategory(item.strCategory);
      }}
    />
  );
  return (
    <View>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
};

export default Categories;
