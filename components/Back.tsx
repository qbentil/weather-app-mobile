import Colors from "../constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { Text } from "./Themed"
import { TouchableOpacity } from "react-native"
import tw from 'twrnc'
import { useNavigation } from "@react-navigation/native"

interface Props{
    showIcon: boolean,
    style: any,
    label: string
}

const Back: React.FC<Props> = ({showIcon, style, label}) => {
    
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            activeOpacity={.7}
            onPress={() => navigation.goBack()}
            style={[tw`flex-row`, style]}
        >
            {showIcon && (
                <Ionicons
                    name="chevron-back-sharp" 
                    size={30}
                    color={Colors.light.tint}
                    style={tw`font-bold`}
                />
            )}
            <Text
                style={[tw`mt-1`, {fontSize: 18, color:Colors.light.tint }]}
            >{label}</Text>
        </TouchableOpacity>
    )
}


export default Back;