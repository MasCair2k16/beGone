/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Image} from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
// import Settings from './src/screens/app/Settings';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import Signin from './src/screens/auth/Signin';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from './src/utils/colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ! Fix this later
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;
          if (route.name === 'Home') {
            icon = focused
              ? require('./src/assets/tabs/home_active.png')
              : require('./src/assets/tabs/home.png');
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('./src/assets/tabs/profile_active.png')
              : require('./src/assets/tabs/profile.png');
          } else if (route.name === 'Favorites') {
            icon = focused
              ? require('./src/assets/tabs/bookmark_active.png')
              : require('./src/assets/tabs/bookmark.png');
          }
          // You can return any component that you like here!
          return <Image style={{width: 24, height: 24}} source={icon} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: colors.white},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  const isSignedIn = true;

  // initial start of app running
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  const theme = {
    colors: {
      background: colors.white,
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {/* When user is signed in */}
          {isSignedIn && (
            <>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{headerShown: false}}
              />
            </>
          )}
          {/* When user is not signed in */}
          {!isSignedIn && (
            <>
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signin"
                component={Signin}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
