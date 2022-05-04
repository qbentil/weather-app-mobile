import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { Image, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import HomeScreenHeader from '../headers/HomeScreenHeader';
import { RootTabScreenProps } from '../types';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

const image = {uri: "https://www.globe.gov/o/globe-gov-measurements-portlet/img/map-background.png"}
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={tw``}>
        <HomeScreenHeader />
        {/* <Image style={tw`h-full`} source = {image} resizeMode = 'cover'>
        
        </Image> */}
        <ImageBackground style={tw`h-72 mt-12 opacity-${colorScheme == 'light'?'10':'30'}`} source={image} resizeMode = 'cover'></ImageBackground>
        <View style = {tw`absolute items-center top-42 left-26 bg-transparent`}>
          <FontAwesome5 name="cloud-sun-rain" style = {tw`my-4`} size={140} color={colorScheme == 'light'?Colors.light.tabIconDefault:Colors.dark.text} />
          <Text style = {tw`font-bold text-xl mt-2 text-gray-${colorScheme == 'light'?'600':'200'}`}>Thunder</Text>
          <Text style = {tw`font-bold mt-4 text-[7.5rem] text-[${Colors[colorScheme].text}]`}>13</Text>
          <Text style={tw`absolute top-62 left-37 font-bold text-2xl text-[${Colors.light.tint}]`}>O</Text>
        </View>

        <View style = {tw`flex flex-row justify-around mt-30 h-full`}>
          <View style = {tw`items-center`}>
            <Feather name="cloud-snow" size={40} color="white" />
            <Text style = {tw`text-sm mt-1 text-gray-${colorScheme == 'light'?'600':'400'}`}>Humidity</Text>
          </View>
          <View style = {tw`items-center`}>
            <FontAwesome5 name="cloud-sun-rain" size={40} color="white" />
            <Text style = {tw`text-sm mt-1 text-gray-${colorScheme == 'light'?'600':'400'}`}>Wind</Text>
          </View>
          <View style = {tw`items-center`}>
            <FontAwesome5 name="cloud-moon-rain" size={40} color="white" />
            <Text style = {tw`text-sm mt-1 text-gray-${colorScheme == 'light'?'600':'400'}`}>Pressure</Text>
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
