import React, {Component} from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import Transaction from "./screens/Transaction";
import SearchScreen from "./screens/SearchScreen";

import * as Font from 'expo-font';
import {Rajdhani_600SemiBold} from '@expo-google-fonts/rajdhani';

const Tab = createBottomTabNavigator();

export default class App extends Component{
  constructor(){
    super();
    this.state= {
      fontLoaded: false
    }
  }

  async loadFonts(){
    await Font.loadAsync({Rajdhani_600SemiBold: Rajdhani_600SemiBold});
    this.setState({fontLoaded:true})
  }

  componentDidMount(){
    this.loadFonts();
  }

  render(){
   if(this.state.fontLoaded){
    return(
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Transaction') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'Search') {
              
              iconName = focused ? 'search' : 'search-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'black',
        })}>
          <Tab.Screen name="Transaction" component={Transaction} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    )
   }else{
    return(
      <Text>App is loading fonts....</Text>
    )
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
