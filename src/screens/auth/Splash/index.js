import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';

const Splash = ({navigation}) => {
  const onSignup = () => {
    navigation.navigate('Signup');
  };

  const onSignin = () => {
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        key={0}
        style={styles.image}
        source={require('../../../assets/splash_image.png')}
      />
      <View style={styles.titleContainer}>
        <Text key={1} style={styles.title}>
          You'll find
        </Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button onPress={onSignup} title="Sign Up" />

      <Pressable onPress={onSignin} hitSlop={20}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
