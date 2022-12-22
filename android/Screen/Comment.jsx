import {
    View,
    Text,
   
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,  StatusBar,TextInput,
    SafeAreaView,StyleSheet,Dimensions,Switch
  } from 'react-native';
  export default function Comment(){
    return(
        <View
        style={{
            flex:1,
            justifyCenter:'center',
            item:'center',
            backgroundColor:'#ffffff',
        
        }}
        >
           
            <View className="mt-5 "
            style={{margin:20,
            paddingTop:30}}>
                <Text>Comment us!</Text>
            <TextInput className="w-full mt-4  border-solid border-2 rounded-md  border-indigo-600 p-3 mb-2 bg-gray-100 "
                 returnKeyType="next" 
               placeholder="Your feedBack."        
                  secureTextEntry={true}
                  numberOfLines={10}
            multiline={true}
            style={{         
          textAlign: 'center',
          borderWidth: 2,
          borderColor: '#9E9E9E',
          borderRadius: 20 ,
          backgroundColor : "#FFFFFF",
          height: 150
           
            }}
     />
     
<TouchableOpacity
 className="bg-blue-400 jistfy rounded-md p-2 ">  
<Text className="text-center text-white font-bold ">Change</Text>
</TouchableOpacity>
            </View>

        </View>             
    )
   }