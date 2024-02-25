import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Details from './pages/Details';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{headerTintColor: 'orange'}}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{headerTintColor: 'orange'}}
        />
        <Stack.Screen
          name="Detail"
          component={Details}
          options={{headerTintColor: 'orange'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
