/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Signup />
      </View>
    </SafeAreaView>
  );
};

export default App;
