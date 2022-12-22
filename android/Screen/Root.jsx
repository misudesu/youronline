import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,  StatusBar,
    SafeAreaView,StyleSheet,Dimensions,Switch
  } from 'react-native';
export default function Root(){
return(
<View style={{flex:1, alignItems:'center',justifyContent: 'center'}}>
    <Text className='text-xl font-bold text-black mb-2'>Sign in</Text>
<View className='flex-row bg-blue gap-8 justify-center mb-2'>
<Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png'}} className="bg-indigo-200  rounded-full w-8 h-8"/>
</View>
<Text>OR</Text>
<TouchableOpacity className='mt-4 bg-red-300 px-5 py-2 mb-5 hover:bg-green-100'>
  
    <Text>Sign in with Phone</Text>
 
</TouchableOpacity>
<Text>Don't Have an Account?</Text>
<Text className='text-blue-500 mt-1'>Sign up</Text>
</View>
);
}