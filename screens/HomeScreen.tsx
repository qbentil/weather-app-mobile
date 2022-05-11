import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { Image, ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';
import HomeScreenHeader from '../headers/HomeScreenHeader';
import Icon from '../components/Icon';
import { RootTabScreenProps } from '../types';
import { Text } from '../components/Themed';
import axios from 'axios';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';
import { useState } from 'react'

const image = {uri: "https://www.globe.gov/o/globe-gov-measurements-portlet/img/map-background.png"}

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [currentLongitude, setCurrentLongitude] = useState('-0.1969')
  const [currentLatitude, setCurrentLatitude] = useState('5.556')
  const [data, setData] = useState({})
  const colorScheme = useColorScheme();
  

  const getWeather: React.FC<string> = async (lat, lon) =>{
    let url = "https://community-open-weather-map.p.rapidapi.com/weather"
    const options = {
        params: {
          // q: loc,
          lang: 'null',
          units: 'imperial',
          lat: lat,
          lon: lon
        },
        headers: {
          'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
          'X-RapidAPI-Key': '1abd2dc37fmshbe51aefd7d377e4p1bfdadjsn4aae57580c46'
        }
      };

    try {
        let res = await axios.get(url, options)
        let data = await res.data
        console.log('====================================');
        setData(data)
        console.log('====================================');
    } catch (e) {
        console.log(e);
    }
    
}
const  geoLocate = async () => {
  let url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDkHnZr4iAWPzeCBMAcqRJ9v8Ft0E3iLqE';
  try {
      let res = await axios.post(url);
      let data =  res.data
      setCurrentLatitude(data.location.lat)
      setCurrentLongitude(data.location.lng)
      console.log("Lat ",   currentLatitude);
      console.log("Lng ",  currentLongitude);
  } catch (error) {
      console.log(error);
  }
}
  // geoLocate();// 
  // getWeather(currentLatitude, currentLongitude)
  
  return (
    <SafeAreaView style={tw``}>
        <HomeScreenHeader city = {''} country = {''} timezone = {'0'} />
        <ImageBackground style={tw`h-72 mt-12 opacity-${colorScheme == 'light'?'10':'30'}`} source={image} resizeMode = 'cover'></ImageBackground>
        <View style = {tw`absolute items-center top-42 left-26 bg-transparent`}>
          <Icon style = {tw`w-60 h-60 mt--5`} icon = {'04d'} />
          <Text style = {tw`font-bold text-xl mt-2 text-gray-${colorScheme == 'light'?'600':'200'}`}>Thunder</Text>
          <Text style = {tw`font-bold mt-4 text-[7.5rem] text-[${Colors[colorScheme].text}]`}>13</Text>
          <Text style={tw`absolute top-74 left-46 font-bold text-2xl text-[${Colors.light.tint}]`}>O</Text>
        </View>

        <View style = {tw`flex flex-row justify-around mt-40 h-full`}>
          <View style = {tw`items-center`}>
            <Feather name="cloud-snow" size={40}  color={colorScheme == 'light'?Colors.light.tabIconDefault:Colors.dark.text} />
            <Text style = {tw`text-sm mt-1 text-gray-${colorScheme == 'light'?'600':'400'}`}>Humidity</Text>
            <Text style = {tw`text-xl mt-1 text-[${Colors[colorScheme].text}] font-bold`}>11</Text>
            
          </View>
          <View style = {tw`items-center`}>
            <FontAwesome5 name="cloud-sun-rain" size={40} color={colorScheme == 'light'?Colors.light.tabIconDefault:Colors.dark.text} />
            <Text style = {tw`text-sm mt-1 text-gray-${colorScheme == 'light'?'600':'400'}`}>Wind</Text>
            <Text style = {tw`text-xl mt-1 text-[${Colors[colorScheme].text}] font-bold`}>11.6</Text>
          </View>
          <View style = {tw`items-center`}>
            <FontAwesome5 name="cloud-moon-rain" size={40} color={colorScheme == 'light'?Colors.light.tabIconDefault:Colors.dark.text} />
            <Text style = {tw`text-sm mt-1 text-gray-${colorScheme == 'light'?'600':'400'}`}>Pressure</Text>
            <Text style = {tw`text-xl mt-1 text-[${Colors[colorScheme].text}] font-bold`}>2.78</Text>
          </View>
        </View>
    </SafeAreaView>
  );
}

