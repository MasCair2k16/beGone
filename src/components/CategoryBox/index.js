/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

const CategoryBox = ({title, image, onPress, isFirst}) => {

  return (
    <View style={[styles.container, isFirst && { marginLeft: 24 }]} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default React.memo(CategoryBox);
