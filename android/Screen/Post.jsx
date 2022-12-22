import React, {useState, useEffect} from 'react';
import { Button, Platform } from 'react-native';
import {
  View, Text,TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList, StatusBar,
  SafeAreaView,StyleSheet,Dimensions,Switch
} from 'react-native';
export default function Post(){ 
  
    return(
        <ScrollView>
            <Text>Just post! your Producte</Text>
 <TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="name of product"       
     />
     <TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="price"           
     />
     <TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="Catagory"        
                 
     />
     <TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="sell or Rental"        
               
     />
     <TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="Shoping location if it is out side country "       
     />
     <TextInput className="w-full p-3 mb-2 bg-gray-100 h-48 text-center bg-indigo-300"
                 returnKeyType="next" 
               placeholder="Details"        
                  secureTextEntry={true}
                  numberOfLines={10}
            multiline={true}
            style={{         
          textAlign: 'center',
          borderWidth: 2,
          borderColor: '#9E9E9E',        
          backgroundColor : "#FFFFFF",
          height: 150          
            }}           
     />
     <Text> Personal Info</Text>
  
<TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="full name"        
               
     />
     <TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="phone"        
               
     />
     <TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="country"        
               
     />
     <TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="city"        
               
     />
     <TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="kebele"        
               
     />
     <TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="Address"        
               
     />
     <TextInput className="w-full p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="gps link"        
               
     />
     <View>

     </View>
<View>
  <TouchableOpacity className="rounded-md px-2 m-3 py-2 bg-blue-300">
    <Text className="text-center font-bold">Post</Text>
  </TouchableOpacity>
</View>
        </ScrollView>
    )
}