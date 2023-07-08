import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';

const Signin = ({navigation}) => {
  const onSignup = () => {
    navigation.navigate('Signup');
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />
        <Input label="E-mail" placeholder="example@gmail.com" />
        <Input isPassword label="Password" placeholder="********" />
        <Button title="Sign In" style={styles.button} />
        <Separator text="Or sign in with" />
        <GoogleLogin />

        <Text style={styles.footerText}>
          Don't have an account?
          <Text onPress={onSignup} style={styles.footerLink}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
