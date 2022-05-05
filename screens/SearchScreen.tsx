import { Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';
import Icon from '../components/Icon';
import { RootTabScreenProps } from '../types';
import SearchBar from '../components/SearchBox';
import SearchScreenheader from '../headers/SearchScreenheader';
import { Text } from '../components/Themed';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

const image = {uri: "https://www.globe.gov/o/globe-gov-measurements-portlet/img/map-background.png"}
export default function SearchScreen({ navigation }: RootTabScreenProps<'Search'>) {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={tw``}>
        <SearchScreenheader />
        <SearchBar style={tw``} />
        <ImageBackground style={tw`h-72 mt-25 opacity-${colorScheme == 'light'?'10':'30'}`} source={image} resizeMode = 'cover'></ImageBackground>
        <View style = {tw`flex flex-row justify-around bg-transparent w-[89%] h-40 mx-auto mt--95`}>
            <View style = {tw`w-[45%] border h-full flex items-center justify-around rounded-xl shadow-xl ${colorScheme == 'light'? "bg-gray-200   border-gray-200":"bg-gray-800 opacity-90 border-transparent"}`}>
                <Text style = {tw`my-1`}>Temperature</Text>
                {/* <FontAwesome5 name="cloud-sun-rain" style = {tw`shadow-xl`} size={65} color={colorScheme == 'light'?Colors.dark.background:Colors.light.background} /> */}
                <Icon style = {tw`w-27 h-20 mt--1`} />
                <View style ={tw`flex flex-row w-[80%] justify-evenly items-center`}>
                  <Text style = {tw`font-bold text-3xl text-[${Colors[colorScheme].text}]`}>30</Text>
                  <Text style = {tw`font-bold text-sm opacity-50 mt-2 text-[${Colors[colorScheme].text}]`}>Thunder</Text>
                </View>
            </View>
            <View style = {tw`w-[45%] border h-full flex items-center justify-around rounded-xl shadow-xl ${colorScheme == 'light'? "bg-gray-200   border-gray-200":"bg-gray-800 opacity-90 border-transparent"}`}>
                <Text>Wind Speed</Text>
                <FontAwesome5 name="cloud-sun-rain" style = {tw`shadow-xl`} size={65} color={colorScheme == 'light'?Colors.dark.background:Colors.light.background} />
                <View style ={tw`flex flex-row w-[80%] justify-evenly items-center`}>
                  <Text style = {tw`font-bold text-3xl text-[${Colors[colorScheme].text}]`}>30</Text>
                  <Text style = {tw`font-bold text-sm opacity-50 mt-2 text-[${Colors[colorScheme].text}]`}>m/s</Text>
                </View>
            </View>
        </View>
        <View style ={tw`mx-auto h-25 my-2 items-center  justify-center`}>
              <View style = {tw`border flex flex-row justify-around  items-center px-2 w-35 h-12 rounded-full mt-2 mr-2 ${colorScheme == 'light'? "bg-gray-200 border-gray-200": 'border-gray-500'}`}>
                  <Text style = {{}}>More cities</Text>
                  <MaterialCommunityIcons name="shield-star-outline" size={22} color={Colors[colorScheme].tint} />
              </View>
        </View>
        <View style = {tw`w-[60%] mx-auto items-center absolute top-120 z-50 left-20`}>
          <Icon style={tw`w-22 h-22`} />
        </View>
        <View style = {tw`w-[95%] h-60 mt-4 mx-auto flex flex-row items-center justify-around rounded-xl shadow-xl ${colorScheme == 'light'? "bg-gray-100 border border-gray-100":"border bg-gray-800 opacity-90 border-transparent"}`}>
            <View style = {tw`w-[49%] flex items-center justify-between`}>
                <View style = {tw`items-center mb-10 `}>
                  <Text style = {tw`opacity-60 mb-2 text-sm`}>Min Temperature</Text>
                  <Text style = {tw`text-xl `}>8 km/h</Text>
                </View>
                <View style = {tw`items-center `}>
                  <Text style = {tw`opacity-60 mb-2 text-sm`}>Max Temperature</Text>
                  <Text style = {tw`text-xl `}>8 km/h</Text>
                </View>
            </View>
            <View style = {tw`h-[70%] w-[1px] ${colorScheme == 'light'? "bg-gray-200": 'bg-white'} shadow-xl`}></View>
            <View style = {tw`w-[49%] flex items-center justify-between`}>
                <View style = {tw`items-center mb-10 `}>
                  <Text style = {tw`opacity-60 mb-2 text-sm`}>Humidy</Text>
                  <Text style = {tw`text-xl `}>8 km/h</Text>
                </View>
                <View style = {tw`items-center `}>
                  <Text style = {tw`opacity-60 mb-2 text-sm`}>Pressure</Text>
                  <Text style = {tw`text-xl `}>8 km/h</Text>
                </View>
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
