import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';
import { Text } from '../components/Themed';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

export default function HomeScreenHeader() {
    const colorScheme = useColorScheme();
  return (
    <View style = {tw`flex flex-row mx-2 mt-2 justify-between`}>
        <View style = {tw``}>
            <Text style = {tw`ml-2 text-sm text-gray-${colorScheme == 'light'?'600':'400'}`}>22 Feb, 2022</Text>
            <View style = {tw`flex flex-row items-center`}>
                <Entypo name="location-pin" size={26} style = {tw`m-0`} color={Colors[colorScheme].text} />
                <Text style = {tw`font-bold uppercase text-lg`}>Accra, </Text>
                <Text style = {tw`text-lg text-gray-${colorScheme == 'light'?'600':'400'}`}>Ghana</Text>
            </View>
        </View>
        <View style = {tw``}>
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
