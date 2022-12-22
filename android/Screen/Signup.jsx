import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import {
    View,
    Text,  
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,  StatusBar,TextInput,
    SafeAreaView,StyleSheet,Dimensions,Switch
  } from 'react-native';
export default function Signup(){
    const [isSelected, setSelection] = useState(false);
    return(
        <ScrollView style={{flex:1,backgroundColor: '#fff',}} className=''>
        <View className='m-3'>           
   <View className=' items-center p-8 mx-auto'>
   <Text className='text-3xl font-bold'> Sign up</Text>
<Text className='text-center'>
    One to rule them all -we connect your social data
 </Text>
       </View>
       <View className=''>
       <TextInput
           autoCapitalize="none" 
       
           autoCorrect={false} 
           keyboardType='email-address' 
           returnKeyType="next" 
          
       style={styles.input}
   placeholder="Email" /> 
        <TextInput 
          returnKeyType="next" 
        style={styles.input}
         placeholder=" First name" />
        <TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="Password."        
                  secureTextEntry={true}
     />
        <TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="go" 
                     
                  secureTextEntry={true}
        placeholder="Repeat password" />
       </View>
       <View className='flex-row mb-5 mt-20'>
       <Checkbox
        disabled={false}
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          color={isSelected ? 'green' : undefined}
        />
        <Text className='text-xs mx-5'>By checking box, I confirm my agreement to the Term of Use,Terms {'&'} conditions,Privacy, Terms of Distribution.
        {isSelected ? "😀" : undefined}
        </Text>
    
       </View>
       <TouchableOpacity className='bg-red-400  py-3   hover:bg-metal-700'>
        <Text className='text-center font-bold text-white text-xl'>Get started</Text>
       </TouchableOpacity>
<View className='flex-row gap-4 mx-auto mt-5'>
<Text>Already have an account?</Text>
<Text className='text-blue-500 mt-1'>Sign up</Text>
    </View> 
        </View>
        </ScrollView> 
    );
}
const styles=StyleSheet.create({
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#000'
    }, checkbox: {
        margin: 8,
      },
})