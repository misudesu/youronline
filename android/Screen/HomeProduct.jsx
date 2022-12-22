import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
 
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,  StatusBar,
  SafeAreaView,StyleSheet,Dimensions,Switch
} from 'react-native';
import {useColorScheme} from "nativewind";
import {COLOURS, Items} from './Database';
export default function HomeProduct() {
  const width = Dimensions.get('window').width;
const {colorScheme,toggleColorScheme}=useColorScheme();
  const renderItem = ({ item }) =>{
    return (
      <View
        style={{
          width: width/2,
          height:width/2,
          borderRadius: 10,
          borderColor: COLOURS.blue,
          padding:5,
          marginBottom: 10,
          justifyContent: 'center',
        }}>
        <Image
          source={{uri:item.img}}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
            resizeMode: 'contain',
          }}
        />
       <View style={{  flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',}}>
        <Text>{item.rank>=1000 ? (item.rank+'k'):item.rank}</Text>
       <Text>like</Text>
       </View>
        <Text style={{flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'center',
              marginBottom: 10,}} >{item.title}</Text>
      
      </View>
    );
  };
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item one two sara towin daks fiten',
      rank:'1000',
      img:'https://architecturesstyle.com/wp-content/uploads/2020/04/different-types-of-houses10-e1586935746751.jpg'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      rank:'100',
      img:'https://architecturesstyle.com/wp-content/uploads/2020/04/different-types-of-houses10-e1586935746751.jpg'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      disc:'this is',
      img:'https://architecturesstyle.com/wp-content/uploads/2020/04/different-types-of-houses10-e1586935746751.jpg'
    },
  ];
    return(
       <View className="flex-1  items-center justify-center bg-gray-200 dark:bg-black ">
         <View >
      <Text className="">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Switch value={colorScheme==="dark"} onChange={toggleColorScheme}/>
    </View>
        {/* <View >
        <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />
     
        <View >
<View style={styles.notifay}>
<Text style={styles.title}>
  Share &amp;get up to $100 off
</Text>
<Text style={styles.paragraph}>Give friends a 10% discount up to $100 off their first {`\n`}
 Fiverr order.
</Text>
<View style={{
 
justifyContaint:'center',
flexDirection: 'row',
alignItems:'center',
}}>
<Text style={styles.lightButton}>
  Invite Friends -{`>`}
  </Text>
 
  </View>

</View>
        </View>
        <Text style={styles.catagory}>
          Inspired by your {`\n`} browsing history
          </Text>
          <FlatList data={DATA} renderItem={renderItem} 
          horizontal
         
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.8}
        
          bounces={false}
          />
          </View> */}
       </View>
    )
}
const styles=StyleSheet.create({
  contaner:{

flexDirection:'row',
justifyContaint:'center',
alignIteams:'center',

  },
  notifay:{
    borderRadius: 10,
backgroundColor:COLOURS.Dpink,
width:'100%',
padding:16,
top:5,
  },
  title:{
    fontSize:20,
    color: COLOURS.white,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
  },
  paragraph:{
    color: COLOURS.white,
    letterSpacing: 1,
    marginBottom: 10,
  },
  lightButton:{
    fontSize:15,
    color: COLOURS.white,
    fontWeight: '400',
    letterSpacing: 1,
    marginBottom: 10,
    top:10
  },
  catagory:{
    fontSize:20,
    color: COLOURS.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
    marginTop:15 
  },
  image:{
    width:'100%',
    hight:50,

  }
});