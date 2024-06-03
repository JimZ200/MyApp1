import { SafeAreaView, Text , Modal, ActivityIndicator, StyleSheet} from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-native-reanimated'; 
import { Image , ImageBackground, Alert} from 'react-native';
import { View , ScrollView, Button, Pressable, StatusBar, TextInput} from 'react-native'; 
import {useState} from 'react';
import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/HomeScreen';
import AddNote from './Screen/AddNote';

const Stack = createNativeStackNavigator()
export default function App(){ 
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "AddNote" component={AddNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}