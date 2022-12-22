import {
    View,
    Text,
   
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,  StatusBar,TextInput,
    SafeAreaView,StyleSheet,Dimensions,Switch
  } from 'react-native';
  import Entypo from 'react-native-vector-icons/Entypo';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import {COLOURS, Items} from './Database';
export default function Product(){
    const width = Dimensions.get('window').width;
    const rendderHots=({item})=>{
        return (
            <View className='rounded-t-xl   max-w-40 max-h-72 m-2 bg-white ' >
            <Image source={{uri:item.img}} className='w-40 h-32 rounded-t-xl object-cover'/>
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
              <View className='w-40 px-2'>
                <Text className='text-xl-sm text-justify text-gray-600 p-1 text-left'>{item.title}</Text>
              
              </View>
              <View className='flex-row mx-auto gap-x-2 mb-1 px-2 right-0 top-0  '>
    <Text className='text-sm font-bold text-gray-400 '>From </Text>
             <Text className='font-bold text-right'>US$40</Text>
              </View>
              </View>
        )
    }
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
      const DATAhots = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Black Bugatti Car ',
          rank:'1000',
          img:'https://th.bing.com/th/id/OIP.uU_R5hH3KXL0jDgUF4kjCQHaEK?w=279&h=180&c=7&r=0&o=5&pid=1.7'
       ,rate:'5.0'
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Upcoming Maruti Suzuki Car in India ',
          rank:'100',
          img:'https://th.bing.com/th/id/OIP.V8SQV6qHWHPfV8_9T9FXSwHaDH?w=298&h=147&c=7&r=0&o=5&pid=1.7'
          ,rate:'3.5'
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'New car for 2012 Its My Car Club',
          disc:'this is',
          rank:'66',
          img:'https://th.bing.com/th/id/OIP.G8nxJrJ1zzgaa03tLAT7KwHaE8?w=240&h=180&c=7&r=0&o=5&pid=1.7'
          ,rate:'3.0'
        },
      ];
      const DATArecent = [
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Industrial Heavy Marchinery - Reliance',
            disc:'this is',
            rank:'66',
            img:'https://th.bing.com/th/id/OIP.dg4UHg2ZIuSdj0wELz525AHaFj?w=262&h=197&c=7&r=0&o=5&pid=1.7'
            ,rate:'3.0'
          },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Black Bugatti Car ',
          rank:'1000',
          img:'https://th.bing.com/th/id/OIP.uU_R5hH3KXL0jDgUF4kjCQHaEK?w=279&h=180&c=7&r=0&o=5&pid=1.7'
       ,rate:'5.0'
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Home of the taweer with 5 room extra spacing  ',
          rank:'100',
          img:'https://th.bing.com/th/id/OIP.g5LKOkPItXkBlOCZzal8BAHaE7?w=261&h=180&c=7&r=0&o=5&pid=1.7'
          ,rate:'3.5'
        },
       
      ];
    return(
      <ScrollView >
  <SafeAreaView className="flex-1 mt-2 shadow-sm " >
    <View className='flex-row justify-center mx-auto space-x-2  py-3'> 
    <Text className='text-lg font-bold text-indigo-500 '>Musi online</Text>
    <Image className='w-8 h-8 rounded-full'
    source={{uri:'https://th.bing.com/th/id/OIP.4dDfpbxdixWZIM-uFD-DhgHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7'}}/>
</View>
<View className="bg-indigo-200 p-4 rounded-md m-2">
<Text className='text-lg font-bold'>Share {'&'} get up to $100 off </Text>
<Text>Give friends a 10% discount up to {'$'} 100 off their frist Musi order</Text>
<View className=''>
<TouchableOpacity>
    <Text className='text-lg font-bold'>Invite Friends {'->'}</Text>
</TouchableOpacity>
</View>
</View>
  <View className='flex-row justify-between px-5'>
<Text className='text-lg font-bold '>People also viewed</Text>
<Text className='text-xsm text-indigo-300'>view All</Text>
</View>

    <View>
    <FlatList data={DATA} renderItem={renderItem} 
          horizontal
         
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.8}
        
          bounces={false}
          />   
    </View>
    <View className='flex-row justify-between px-5'>
<Text className='text-lg font-bold '>Hots Prodact</Text>
<Text className='text-xsm text-indigo-300'>view All</Text>
</View>
    <View>
    <FlatList data={DATAhots} renderItem={rendderHots} 
          horizontal
         
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.8}
        
          bounces={false}
          />   
    </View>
<View className='flex-row justify-between px-5'>
<Text className='text-lg font-bold '>Recently viewed</Text>
<Text className='text-lg text-indigo-300'>Manage</Text>
</View> 

<View>
    <FlatList data={DATArecent} renderItem={renderItem} 
          horizontal
         
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.8}
        
          bounces={false}
          />   
    </View> 
    </SafeAreaView>    
      </ScrollView>

    )
}