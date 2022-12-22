import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './SettingsScreen';
import Login from '../Login'
import HomeProduct from './HomeProducts';
import Root from './Signup';
import Pro from './Product';
import view from './ProdactView';
import setting from './Setting';
import reset from './Comment';
import Post from './Post';
const Tab = createBottomTabNavigator();
export default function Home() {
  return (
    <Tab.Navigator>
  <Tab.Screen name="Post" component={Post}/>      
      {/* <Tab.Screen name="reset" component={reset}/>
      <Tab.Screen name="setting" component={setting}/>
      <Tab.Screen name="view" component={view}/>
      <Tab.Screen name="pro" component={Pro}/>
      <Tab.Screen name="ROOT" component={Root}/>
      <Tab.Screen name="Hproducts" component={HomeProduct}/>
      <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  )
}