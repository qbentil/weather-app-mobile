import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';

import Colors from '../../constants/Colors';
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme';
import { useState } from 'react';

interface Props{
  style: any,
//   search: any  
}
const SearchBar: React.FC<Props> =({style, }) =>{
    const colorScheme = useColorScheme();
    const [val, setVal] = useState('')
    return (
        <KeyboardAvoidingView 
        behavior = 'padding' 
        style={tw`w-[85%] px-1 pl-3 pr-3 mx-auto my-10 h-14 flex flex-row items-center rounded-full ${colorScheme == 'light'? 'bg-gray-200' : 'bg-[#232323] '}`}
        
        >
            <Ionicons name='search' size={22} color = {Colors[colorScheme].text} />
            <TextInput
                style={[tw`flex-1 py-1 pl-2`,{color: Colors[colorScheme].text}]}
                placeholder="Accra"
                defaultValue={val}
                onChangeText={(text) => setVal(text)}
                underlineColorAndroid="transparent"
                placeholderTextColor={Colors['light'].tabIconDefault}
                returnKeyType = {'search'}
            />
            {/* <Ionicons name='search' size={22} } /> */}
            <TouchableOpacity activeOpacity={.8} onPress={() => setVal('')}>
                <EvilIcons name="close" size={20} color = {Colors[colorScheme].text} />
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

export default SearchBar;

