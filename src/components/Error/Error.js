import React from 'react';
import {Alert, View} from 'react-native';

const Error = () => {
  return <View>{Alert.alert('Hata')}</View>;
};

export default Error;
