import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Switch,
} from "react-native";
import { COLOURS, Items } from "./Database";
import Entypo from "react-native-vector-icons/Entypo";

export default function Setting() {
  const nav = {
    navs: [
      { name: "Profile", icons: "user" },
      { name: "Agreements", icons: "text-document" },
    ],
    pay: [
      { name: "Payment details", icons: "credit-card" },
      { name: "Account history", icons: "open-book" },
    ],
    COMMUNITY: [
      { name: "Visit Forum", icons: "publish" },
      { name: "Share", icons: "share" },
      {name:"Comment",icons:'comment'}
    ],
    SETTING: [
      { name: "Change Password", icons: "key" },
      { name: "Info", icons: "info-with-circle" },
    ],
  };
  return (
    <ScrollView className="p-4">
      <View>
        <View
          className=" px-5 pb-4 gap-2 rounded-xl justify-center items-center">
            <View>
             <Image className="rounded-full  w-20 h-20" source={{uri:'https://th.bing.com/th/id/OIP.7R0PTlj7Bd4dcQYePwYjfwHaLp?pid=ImgDet&rs=1'}}/>
            </View>
          <View className="bg-">
            <Text className="text-lg font-bold">Misael Dessalegn</Text>
           <View className="flex-row text-center gap-2">

            <Text className="bg-gray-200 rounded-md px-2">Ethiopia</Text>
           <Text className="text-xl-sm text-center">0928700105</Text>
           </View>
          </View>
        </View>
        <Text className="text-lg text-black-100 mt-5">PERSONAL</Text>
        {nav.navs.map((data, index) => (
          <View className="gap-2">
            <View
              style={{
                backgroundColor: COLOURS.white,
              }}
              className="flex-row  p-2 m-1 items-center rounded-md gap-4 "
              key={index}
            >
              <Entypo
                name={data.icons}
                style={{
                  fontSize: 18,
                  color: COLOURS.green,
                  borderRadius: 10,
                }}
              />
              <Text>{data.name}</Text>
            </View>
          </View>
        ))}
        <Text className="text-lg text-black-100 mt-5">PAYMENT</Text>
        {nav.pay.map((data, index) => (
          <View className="gap-2">
            <View
              style={{
                backgroundColor: COLOURS.white,
              }}
              className="flex-row p-2 m-1 gap-4 "
              key={index}
            >
              <Entypo
                name={data.icons}
                style={{
                  fontSize: 18,
                  color: COLOURS.green,
                  borderRadius: 10,
                }}
              />
              <Text>{data.name}</Text>
            </View>
          </View>
        ))}

        <Text className="text-lg text-black-100 mt-5">COMMUNITY</Text>
        {nav.COMMUNITY.map((data, index) => (
          <View className="gap-2">
            <View
              style={{
                backgroundColor: COLOURS.white,
              }}
              className="flex-row p-2 m-1 gap-4 "
              key={index}
            >
              <Entypo
                name={data.icons}
                style={{
                  fontSize: 18,
                  color: COLOURS.green,
                  borderRadius: 10,
                }}
              />
              <Text>{data.name}</Text>
            </View>
          </View>
        ))}

        <Text className="text-lg text-black-100 mt-5">SETTING</Text>
        {nav.SETTING.map((data, index) => (
          <View className="gap-1">
            <View
              style={{
                backgroundColor: COLOURS.white,
              }}
              className="flex-row p-2 m-1 gap-4 "
              key={index}
            >
              <Entypo
                name={data.icons}
                style={{
                  fontSize: 18,
                  color: COLOURS.green,
                  borderRadius: 10,
                }}
              />
              <Text>{data.name}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
