import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header showSearch title='Find all you need here' />
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
