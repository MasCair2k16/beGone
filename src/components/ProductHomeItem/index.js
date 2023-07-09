/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

const ProductHomeItem = ({title, price, image, onPress}) => {

  return (
    <View style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

export default React.memo(ProductHomeItem);
