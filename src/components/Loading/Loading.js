import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loading = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
