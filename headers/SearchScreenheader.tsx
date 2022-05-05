import { Appearance, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

import Back from '../components/Back';
import Colors from '../constants/Colors';
import { Text } from '../components/Themed';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

export default function SearchScreenheader() {
    const colorScheme = useColorScheme();

  return (
    <View style = {tw`flex flex-row mx-2 mt-2 justify-between items-center`}>
      <Back showIcon style={tw`ml-2`} label = ""/>
        <Text style = {tw`font-bold text-xl mt-1`}>Search for City</Text>
      <Text></Text>
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
