import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { Image, ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';
import HomeScreenHeader from '../headers/HomeScreenHeader';
import Icon from '../components/Icon';
import { RootTabScreenProps } from '../types';
import { Text } from '../components/Themed';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';
import { useState } from 'react';

// import Geolocation from 'react-native-geolocation-service';








// navigator.geolocation = require('@react-native-community/geolocation')








const image = {uri: "https://www.globe.gov/o/globe-gov-measurements-portlet/img/map-background.png"}
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  // const [currentLongitude, setCurrentLongitude] = useState('')
  // const [currentLatitude, setCurrentLatitude] = useState('')
  const colorScheme = useColorScheme();
  
  // Geolocation.getCurrentPosition(
  //   //Will give you the current location
  //   (position) => {
  //     //getting the Longitude from the location json
  //     console.log(JSON.stringify(position.coords.longitude));
  //     setCurrentLongitude(JSON.stringify(position.coords.longitude));
      
   
  //     //getting the Latitude from the location json
  //     console.log(JSON.stringify(position.coords.latitude));
  //     setCurrentLatitude(JSON.stringify(position.coords.latitude))
      
        
  //    }, (error) => alert(error.message), { 
  //      enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
  //    }
  // );
  
//  Geolocation.getCurrentPosition(
//     position => {
//       const initialPosition = JSON.stringify(position);
//       let region = {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//           }
//       // setState({initialPosition:region});
//       console.log("lat "+position.coords.latitude+" longi "+position.coords.longitude)
//       console.log("initialPosition")
//       // console.log(this.state.initialPosition)
//     },
//      error => console.log("Error "+ JSON.stringify(error)),
//     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//   );
  // this.watchID = Geolocation.watchPosition(position => {
  //   const lastPosition = JSON.stringify(position);
  //   this.setState({lastPosition});
  // });
  
  
  return (
    <SafeAreaView style={tw``}>
        <HomeScreenHeader />
        <ImageBackground style={tw`h-72 mt-12 opacity-${colorScheme == 'light'?'10':'30'}`} source={image} resizeMode = 'cover'></ImageBackground>
        <View style = {tw`absolute items-center top-42 left-26 bg-transparent`}>
          <Icon icon={''} style = {tw`w-60 h-60 mt--5`} />
          <Text style = {tw`font-bold text-xl mt-2 text-gray-${colorScheme == 'light'?'600':'200'}`}>Thunder</Text>
          <Text style = {tw`font-bold mt-4 text-[7.5rem] text-[${Colors[colorScheme].text}]`}>13</Text>
          <Text style={tw`absolute top-74 left-45 font-bold text-2xl text-[${Colors.light.tint}]`}>O</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
