
import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import AboutBitcoin from './screens/AboutBitcoin';
import Top100 from './screens/Top100';
import CryptoInfo from './screens/CryptoInfo';
import About from './screens/About';

const Stack = createStackNavigator();
const { width } = Dimensions.get("window");

export default function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
         <Stack.Screen
          name="Home"
          component={Home}
        />
         <Stack.Screen
          name="AboutBitcoin"
          component={AboutBitcoin}
        />
        <Stack.Screen
          name="Top100"
          component={Top100}
        />
        <Stack.Screen
          name="CryptoInfo"
          component={CryptoInfo}
        />
        <Stack.Screen
          name="About"
          component={About}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

