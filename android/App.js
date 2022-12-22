// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    StyleSheet,
    Image,
    TextInput,
    Button,SafeAreaView,Platform,OS,
    TouchableOpacity,KeyboardAvoidingView,StatusBar
  } from "react-native";
import Home from './Screen/Home';
import Login from './Login'
export default function App() {
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
return (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
          name="Root"
          component={Home}
          options={{
            headerShown: false,
          }}
        />     
      {/* <Stack.Screen name="Home" component={Home}/> */}
    </Stack.Navigator>
  </NavigationContainer>
);
}
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor: '#fff',
    padding:20,
     justifyContent: 'center',
},
card:{
    padding:20,
    width:200,
    highte:100,
backgroundColor:'#012756',
flexDirection:'column',
},
image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    height:100,
    width:100,
    alignItems:'center',
    justifyContent: 'center',
  },
});