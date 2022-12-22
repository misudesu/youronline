import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,SafeAreaView,Platform,OS,
  TouchableOpacity,KeyboardAvoidingView,StatusBar
} from "react-native";
export default function App() {
  let Image_Http_URL ={ uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'};
  return (
    <KeyboardAvoidingView  style={styles.container}>

    <View style={styles.container}>
        <View style={styles.loginContainer}>
      <Image style={styles.image} width="100" highte="50" source={{uri:'https://i.pinimg.com/originals/37/5a/40/375a4084e9892a19d6e0e113ef2b26d4.jpg'}} />
     
      </View>
      <StatusBar style="auto" />
      <Text>Email</Text>
     <View >
      <View style={styles.inputView}>
       
        <TextInput
        style = {styles.input} 
        autoCapitalize="none" 
       
        autoCorrect={false} 
        keyboardType='email-address' 
        returnKeyType="next" 
        placeholder='Email ' 
        placeholderTextColor='rgba(225,225,225,0.7)'
          // onChangeText={(email) => setEmail(email)}
        />
      </View>
      <Text>Password</Text>
      <View style={styles.inputView}>
        
        <TextInput
         style = {styles.input}   
         returnKeyType="go" 
         placeholderTextColor='rgba(225,225,225,0.7)'
          placeholder="Password."        
          secureTextEntry={true}
          // onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity  
      // onPress={handleSignUp}
      >
        <Text style={styles.forgot_button} 
        // onPress={handleSignUp}
        >Forgot Password?</Text>
      </TouchableOpacity>
      <Text style={styles.forgot_button}
      //  onPress={() =>navigation.navigate('SignUp', {         
      // })}
      >SignUp</Text>
      <TouchableOpacity 
      //  onPress={handleLogin}
       style={styles.buttonContainer} >
        <Text style={styles.buttonText}>LOGIN</Text>
       
      </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}

  
const styles = StyleSheet.create({
  container: {
   flex: 1,
  backgroundColor: '#fff',
   padding:20,
    justifyContent: 'center',
   },
   input:{
       height: 40,
       backgroundColor: 'rgba(225,225,225,0.2)',
       marginBottom: 10,
       padding: 10,
       color: '#000'
   },
   buttonContainer:{
       backgroundColor: '#2980b6',
       paddingVertical: 15
   },
   buttonText:{
       color: '#fff',
       textAlign: 'center',
       fontWeight: '700'
   },forgot_button: {
    height: 30,
    marginBottom: 5,
  }, image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    height:100,
    width:300,
    alignItems:'center',
    justifyContent: 'center',
  },
});
