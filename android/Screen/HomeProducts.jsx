import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLOURS, Items} from './Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function HomeProduct({route, navigation}) {
    const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
     
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const prodact={
    prodacts:[
      {
        name:"Toyotal 4D",
        title:"car",
        status:"pending...",
        gps:"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7910.395533545923!2d37.84987607150144!3d7.553402263982304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x17b237cca06dad45%3A0x89721c4515b707f5!2z4YiG4Yij4YuV4YqTLCDhiqLhibXhi67hjLXhi6s!3m2!1d7.5531942!2d37.8618422!4m5!1s0x17b237cc12e1dbcb%3A0xfb2200c10538baa!2zSFIyVytDTVIgSG9zc2FuYSBIb3NwaXRhbCwg4YiG4Yij4YuV4YqT!3m2!1d7.5511247!2d37.8466356!5e0!3m2!1sam!2set!4v1663925523320!5m2!1sam!2set",
        address:"ke kalehiywet jerba",
        kebele:"sech duna",
        city:"hossana",
        phone:"+251994508849",
        country:"ethiopia",
        price:"$2,500,000",
        username:"misael dessalegn",
        type:"Sell",
        catagorys:'accessory',
        discription:"Royalty-free licenses let you pay once to use copyrighted images and video clips in personal and commercial projects on an ongoing basis without requiring additional payments each time you use that content. It's a win-win, and it's why everything on iStock is only available royalty-free — including all Car images and footage.",profile:"https://th.bing.com/th/id/R.a54eec64225276db6e79c3098bedc4f8?rik=Hmg2JFyp%2bU0vtA&pid=ImgRaw&r=0",
        img:"https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=170667a&w=0&h=SalbVATc6-d80ErakjYtLKF8XTLGS4Fj1b5PjTKEfnE=",
    
        imgs:[
          {img:"https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=170667a&w=0&h=SalbVATc6-d80ErakjYtLKF8XTLGS4Fj1b5PjTKEfnE="},
        {img:"https://media.istockphoto.com/photos/illustration-of-generic-red-suv-on-white-background-picture-id956052998?k=20&m=956052998&s=612x612&w=0&h=X_fYz-06EjhkpDKsJDxvQDv_W5J3xPJDbrYCuM2rAIg="},
]},
{
    name:"Toyotal 4D",
    title:"car",
    status:"pending...",
    gps:"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7910.395533545923!2d37.84987607150144!3d7.553402263982304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x17b237cca06dad45%3A0x89721c4515b707f5!2z4YiG4Yij4YuV4YqTLCDhiqLhibXhi67hjLXhi6s!3m2!1d7.5531942!2d37.8618422!4m5!1s0x17b237cc12e1dbcb%3A0xfb2200c10538baa!2zSFIyVytDTVIgSG9zc2FuYSBIb3NwaXRhbCwg4YiG4Yij4YuV4YqT!3m2!1d7.5511247!2d37.8466356!5e0!3m2!1sam!2set!4v1663925523320!5m2!1sam!2set",
    address:"ke kalehiywet jerba",
    kebele:"sech duna",
    city:"hossana",
    phone:"+251994508849",
    country:"ethiopia",
    price:"$2,500,000",
    username:"misael dessalegn",
    type:"Sell",
    catagorys:'accessory',
    discription:"Royalty-free licenses let you pay once to use copyrighted images and video clips in personal and commercial projects on an ongoing basis without requiring additional payments each time you use that content. It's a win-win, and it's why everything on iStock is only available royalty-free — including all Car images and footage.",profile:"https://th.bing.com/th/id/R.a54eec64225276db6e79c3098bedc4f8?rik=Hmg2JFyp%2bU0vtA&pid=ImgRaw&r=0",
    img:"https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=170667a&w=0&h=SalbVATc6-d80ErakjYtLKF8XTLGS4Fj1b5PjTKEfnE=",

    imgs:[
      {img:"https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=170667a&w=0&h=SalbVATc6-d80ErakjYtLKF8XTLGS4Fj1b5PjTKEfnE="},
    {img:"https://media.istockphoto.com/photos/illustration-of-generic-red-suv-on-white-background-picture-id956052998?k=20&m=956052998&s=612x612&w=0&h=X_fYz-06EjhkpDKsJDxvQDv_W5J3xPJDbrYCuM2rAIg="},
]},
{
    name:"Toyotal 4D",
    title:"car",
    status:"pending...",
    gps:"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7910.395533545923!2d37.84987607150144!3d7.553402263982304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x17b237cca06dad45%3A0x89721c4515b707f5!2z4YiG4Yij4YuV4YqTLCDhiqLhibXhi67hjLXhi6s!3m2!1d7.5531942!2d37.8618422!4m5!1s0x17b237cc12e1dbcb%3A0xfb2200c10538baa!2zSFIyVytDTVIgSG9zc2FuYSBIb3NwaXRhbCwg4YiG4Yij4YuV4YqT!3m2!1d7.5511247!2d37.8466356!5e0!3m2!1sam!2set!4v1663925523320!5m2!1sam!2set",
    address:"ke kalehiywet jerba",
    kebele:"sech duna",
    city:"hossana",
    phone:"+251994508849",
    country:"ethiopia",
    price:"$2,500,000",
    username:"misael dessalegn",
    type:"Sell",
    catagorys:'accessory',
    discription:"Royalty-free licenses let you pay once to use copyrighted images and video clips in personal and commercial projects on an ongoing basis without requiring additional payments each time you use that content. It's a win-win, and it's why everything on iStock is only available royalty-free — including all Car images and footage.",profile:"https://th.bing.com/th/id/R.a54eec64225276db6e79c3098bedc4f8?rik=Hmg2JFyp%2bU0vtA&pid=ImgRaw&r=0",
    img:"https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=170667a&w=0&h=SalbVATc6-d80ErakjYtLKF8XTLGS4Fj1b5PjTKEfnE=",

    imgs:[
      {img:"https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=170667a&w=0&h=SalbVATc6-d80ErakjYtLKF8XTLGS4Fj1b5PjTKEfnE="},
    {img:"https://media.istockphoto.com/photos/illustration-of-generic-red-suv-on-white-background-picture-id956052998?k=20&m=956052998&s=612x612&w=0&h=X_fYz-06EjhkpDKsJDxvQDv_W5J3xPJDbrYCuM2rAIg="},
]},
    ]
  }

 

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
      }}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          }}>
          <TouchableOpacity>
            <Entypo
              name="shopping-bag"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                backgroundColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
           onPress={() => navigation.navigate('MyCart')}>
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}>
          <Text
            style={{
              fontSize: 26,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 10,
            }}>
            Musi Shop &amp; Service
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: '400',
              letterSpacing: 1,
              lineHeight: 24,
            }}>
            Audio shop on Rustaveli Ave 57.
            {'\n'}This shop offers both products and services
          </Text>
        </View>
        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Products
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
              {prodact.prodacts.length}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>
          <ScrollView showsHorzontalScrollIndicator={true}>

          <View
            style={{
              flexDirection: 'row',
             
            }}>
            {/* {products.map(data => {
              return <ProductCard  />;
            })} */}
 
       
{prodact.prodacts.map((data,index)=>(
   
  
    <TouchableOpacity
    onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
    style={{
        marginLeft:8,
      width: '48%',
      marginVertical: 14,
    }}>
    <View
      style={{
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
      }}>
       
<Image
            source={{uri:data.img}}
            style={{
              width: '80%',
              height: '80%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: '600',
            marginBottom: 2,
          }}>
          {data.name}
        </Text>
        {data.catagorys == 'accessory' ? (
          data.type ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.green,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.green,
                }}>
                Available
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.red,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.red,
                }}>
                Unavailable
              </Text>
            </View>
          )
        ) : null}
        <Text>&#8377; 200</Text>
        
        </TouchableOpacity>
     
))}
      
            {/*  */}
          </View>
          </ScrollView>      
      
        </View>

        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Accessories
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                78
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {/* {accessory.map(data => {
            //   return <ProductCard data={data} key={data.id} />;
            })} */}


            {/*  */}
          </View>
         
        </View>
        <View 
        style={{
            width:'100%',
            hight:100,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
            fontSize: 18,
            color: COLOURS.backgroundMedium,
          
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLOURS.blue,
          }}
        >
<Image
            source={{uri:'https://metropolitanaddis.com/wp-content/uploads/2018/02/9316413ef4a6004.png'}}
            style={{
              
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
          <Text>Home for Rentall</Text>

</View>
      </ScrollView>
      
    </View>
  );
}