/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Splash from './src/screens/auth/Splash';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Splash />
      </View>
    </SafeAreaView>
  );
};

export default App;
