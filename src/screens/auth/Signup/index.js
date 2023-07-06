import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import CheckBox from '../../../components/CheckBox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = () => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {
    // intentional
    console.log('Sign in Clicked');
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="John Doe" />
      <Input label="E-mail" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="********" />
      <View style={styles.agreeRow}>
        <CheckBox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeTextBold}>Terms & policy</Text>
        </Text>
      </View>
      <Button title="Sign Up" style={styles.button} />
      <Separator text="Or sign up with" />
      <GoogleLogin />

      <Text style={styles.footerText}>
        Already have an account?
        <Text onPress={onSignIn} style={styles.footerLink}>
          {' '}
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Signup;
