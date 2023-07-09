import React, {useState} from 'react';
import {TextInput, Text, View, Pressable, Image} from 'react-native';
import {styles} from './styles';

const Input = ({label, placeholder, isPassword, value, onChangeText}) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);

  const onEyePress = () => {
    setisPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!isPasswordVisible && isPassword}
          placeholder={placeholder}
          style={styles.input}
        />
        {/* Show eye on password input */}
        {isPassword && (
          <Pressable onPress={onEyePress}>
            <Image
              style={styles.eye}
              source={
                isPasswordVisible
                  ? require('../../assets/eye.png')
                  : require('../../assets/eye_closed.png')
              }
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default React.memo(Input);
