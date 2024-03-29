/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Input from '../../components/Input';
import {styles} from './styles';

const Header = ({
  title,
  onBackPress,
  onLogout,
  showLogout,
  showSearch,
  onSearch,
  showBack,
  keyword
}) => {

  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearchClick = () => {
    setShowSearchInput(s => !s);
  };

  const simpleHeader = !showBack && !showSearch && !showLogout;

  return (
    <View style={[styles.mainContainer, simpleHeader && styles.containerFavorites]}>
      <View style={styles.container}>
        {/* Show Back */}
        {showBack && (
          <Pressable onPress={onBackPress}>
            <Image style={styles.image} source={require('../../assets/back.png')}/>
          </Pressable>
        )}

        {/* Show Search */}
        {showSearch && (
          <Pressable onPress={onSearchClick}>
            <Image style={styles.image} source={require('../../assets/search.png')}/>
          </Pressable>
        )}

        {/* Text in Header */}
        <Text style={styles.title}>{title}</Text>

        {/* Show Logout */}
        {showLogout ? (
          <Pressable onPress={onLogout}>
            <Image style={styles.image} source={require('../../assets/logout.png')}/>
          </Pressable>
        ) : (<View style={styles.space}/>)}
      </View>

      {/* Show input if user clicks on Search */}
      {showSearchInput && (
        <Input onChangeText={onSearch} value={keyword} placeholder="Type your keyword..." />
      )}
    </View>
  );
};

export default Header;
