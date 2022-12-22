import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,  StatusBar,TextInput,
    SafeAreaView,StyleSheet,Dimensions,Switch
  } from'react-native';
// import Materiallcons from 'react-native-vector-icons/Materiallcons'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {COLOURS, Items} from './Database';
export default function Prodact(){ 
  const horizontalItem = ({ item }) =>{
    return (   
        <View className='flex-row rounded-xl items-center px-3  m-2 w-full gap-x-4 h-20 bg-white' >
        <Image source={{uri:item.img}} className='w-20 h-20  rounded-xl'/>
        <View>
        <View className='w-48 px-2'>
            <Text className='text-xl-sm text-gray-600 p-1 text-left'>{item.title}</Text>
          </View>      
    <Text className='text-xl-sm font-bold text-gray-400 '>From </Text>
         <Text className='text-xl-sm font-bold text-left'>US$40</Text>
        </View>
          </View>
    );
  };
  const renderItem = ({ item }) =>{
    return (
      <View className='rounded-t-xl   max-w-48 max-h-72 m-2 bg-white' >
    <Image source={{uri:item.img}} className='w-48 h-32 rounded-t-xl'/>
      <View className='flex-row pt-1 gap-2 justify-bettwen mx-auto'>
     <View className='flex-row gap-1'>
     <TouchableOpacity>
        <Entypo
          name="star"
          style={{
            fontSize: 18,
            color: COLOURS.Yellow,      
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
      <Text className='font-bold'>{item.rate}</Text>
      <Text className='text-gray-500'>{`(${item.rank})`}</Text>
     </View>
     <AntDesign
     name="like2"
     style={{
       fontSize: 18,
       color: COLOURS.Gray,  
       borderRadius: 10,   
     }}
     />
      </View>
      <View className='w-48 px-2'>
        <Text className='text-xl-sm text-gray-600 p-1 text-left'>{item.title}</Text>
      
      </View>
      <View className='flex-row mx-auto gap-x-2   px-2'>
<Text className='text-sm font-bold text-gray-400 '>From </Text>
     <Text className='font-bold text-right'>US$40</Text>
      </View>
      </View>
    );
  };
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item one two sara towin daks fiten',
      rank:'1000',
      img:'https://architecturesstyle.com/wp-content/uploads/2020/04/different-types-of-houses10-e1586935746751.jpg'
   ,rate:'5.0'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      rank:'100',
      img:'https://th.bing.com/th/id/OIP.g5LKOkPItXkBlOCZzal8BAHaE7?w=261&h=180&c=7&r=0&o=5&pid=1.7'
      ,rate:'3.5'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      disc:'this is',
      rank:'66',
      img:'https://th.bing.com/th/id/OIP.j0_cgtjBsiEouwC2BUPHSgHaES?w=300&h=180&c=7&r=0&o=5&pid=1.7'
      ,rate:'3.0'
    },
  ];
 

    const data={
   mg:[ 
    {img:"https://th.bing.com/th/id/R.4f498d6f219ae3d6f1a498c573a65b61?rik=5gM25MN9h7stcg&pid=ImgRaw&r=0",name:'cc_animation',type:'Level 2 Seller'},   
   {img:"https://th.bing.com/th/id/OIP.IzwiYzKPYgP6tBKC6-Bm3AHaE7?pid=ImgDet&rs=1",name:'cc_animation',type:'Level 2 Seller'},   
    
  ]
  } 
return(
<ScrollView className='flex-1'>
{data.mg.map((datas,index)=>(
  <ScrollView
  >
  <View key={index} className="flex-row  ">
  <Image source={{uri:datas.img}} className="w-full h-32"/>
  <View className="bg-indigo-500 w-full h-1"></View>
  </View>
  </ScrollView>

))}

<View className='m-2'> 
<Image source={{uri:'https://th.bing.com/th/id/OIP.hXL7h7ZVtBtGEWx4M22c9AHaGa?w=228&h=197&c=7&r=0&o=5&pid=1.7'}} className='w-full max-h-40'/>
</View>
<View className=' flex-row shadow-sm   space-x-4 px-8'>
<Image className='rounded-full w-8 h-8' source={{uri:'https://th.bing.com/th/id/OIP.DZA0t0W93mcjyQpF5ZxERgHaIr?w=183&h=214&c=7&r=0&o=5&pid=1.7'}}/> 
<View>
<Text>Muse Alemu</Text>
<Text className='text-gray-400'>Level 2 Seller</Text>
{/* <Materiallcons
   name="arrow-drop-up"
   style={{
     fontSize: 18,
     color: COLOURS.Yellow,
     borderRadius: 10,
   }}
  /> */}
  </View>
 </View>
<View className="p-8 gap-4">
<Text className="text-2xl">Do camera and motion tracking and add text and graphics to your footage </Text>
  <Text>I will enhance your footage with amazing,dynamic motion graphics and visual effects. Please contact me before ordering to check my availabiling and discuss your requirements.</Text>
  
</View>
<View className="flex-row justify-center self-center gap-4">
  <TouchableOpacity className="bg-black p-2 rounded-md  w-18/12  mt-3 ">
    <Text className="font-bold  text-white"> Request Order </Text>
  </TouchableOpacity>
  <Text className="text-2xl font-extrabold">us $440</Text>
</View>
{/* People also viewed */}
<View className="p-5">
  <Text>People also Viewed</Text>
</View>
<View>
    <FlatList data={DATA} renderItem={renderItem} 
          horizontal
         
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.8}
        
          bounces={false}
          />   
    </View>
    <View> 
      <TouchableOpacity className=" flex-row gap-x-4 bg-blue-200 py-2 rounded-md mx-4 justify-center">
      <Feather
          name="phone-call"
          style={{
            fontSize: 18,
            color: COLOURS.green,
           
            borderRadius: 10,
          }}
        />
        <Text className="font-bold">Call Know</Text>
      </TouchableOpacity>
    </View>
    <View className="p-5">
  <Text>Recomended</Text>
</View>
<View>
    <FlatList data={DATA} renderItem={horizontalItem} 
       
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.8}
        
          bounces={false}
          />   
    </View>
  </ScrollView>
  )}