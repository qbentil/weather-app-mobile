import { Appearance, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

import Colors from '../constants/Colors';
import { Text } from '../components/Themed';
import moment from 'moment';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

interface Props{
  city:string,
  country: string,
  timezone: any
}
const HomeScreenHeader:React.FC<Props> = ({city, country, timezone}) =>{
    const colorScheme = useColorScheme();
    // const [isEnabled, setIsEnabled] = useState(false);
        
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    // // add this
    // useEffect(()=>{
    //   const colorScheme = Appearance.getColorScheme();
    //     if (colorScheme === 'dark') {
    //        setIsEnabled(true); // true means dark
    //     }else{
    //        setIsEnabled(false); // false means light
    //     }
    // },[])
    const getTime :React.FC<number> = (timezone) => {
      // return offset;
      let d = new Date();
  
      let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  
      let nd = new Date(utc + (timezone*3600));
  
      // return  nd.toLocaleString();
      return  moment(nd.toLocaleString()).format('LLLL');     
  
    }
  return (
    <View style = {tw`flex flex-row mx-2 mt-2 justify-between`}>
        <View style = {tw``}>
            <Text style = {tw`ml-2 text-lg text-gray-${colorScheme == 'light'?'600':'400'}`}>{getTime(parseInt(timezone))}</Text>
            <View style = {tw`flex flex-row items-center`}>
                <Entypo name="location-pin" size={28  } style = {tw`m-0`} color={Colors[colorScheme].text} />
                <Text style = {tw`font-bold uppercase text-xl`}>{city}, </Text>
                <Text style = {tw`text-xl text-gray-${colorScheme == 'light'?'600':'400'}`}>{country}</Text>
            </View>
        </View>
        <View  style = {tw``}>
            <View style = {tw`flex flex-row border items-center px-2 border-gray-200 w-24 h-12 rounded-full mt-2 mr-2 justify-between`}>
                <View style = {tw`${colorScheme !== 'dark'? `bg-[${Colors.light.tint}]`: ''} w-8 h-8 items-center rounded-full`}>
                    <Ionicons name="sunny" size={22} style={tw`mt-1 ${colorScheme !== 'light'?'text-[#fff]':'text-gray-200'}`}/>
                </View>
                <View style = {tw`${colorScheme == 'dark'? `bg-[${Colors.light.tint}]`: ''} w-8 h-8 items-center rounded-full`}>
                    <FontAwesome5 name="star-and-crescent" size={22} style={tw`mt-1 ${colorScheme !== 'light'?'text-[#fff]':'text-gray-400'}`} />
                </View>
            </View>
        </View>
    </View>
  );
}


export default HomeScreenHeader