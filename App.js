import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/home';
import MovieDetailsScreen from './src/screens/movieDetailsScreen';

const HomeStack = createStackNavigator();

export default function App() {
  return <NavigationContainer>
    <HomeStack.Navigator>
      <HomeStack.Screen name= 'Home' component={Home}/>
      <HomeStack.Screen name= 'MovieDetails' component={MovieDetailsScreen}/>
    </HomeStack.Navigator>
  </NavigationContainer>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
