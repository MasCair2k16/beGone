/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

const FavoriteItem = ({title, price, image, onPress}) => {

  return (
    <View style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Image source={require('../../assets/close.png')} style={styles.icon}/>
    </View>
  );
};

export default React.memo(FavoriteItem);
