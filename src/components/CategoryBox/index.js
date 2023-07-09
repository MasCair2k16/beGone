/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Input from '../../components/Input';
import {styles} from './styles';

const CategoryBox = ({title, image, onPress}) => {

  return (
    <View style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default React.memo(CategoryBox);
