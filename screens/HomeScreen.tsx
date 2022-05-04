import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import HomeScreenHeader from '../headers/HomeScreenHeader';
import { RootTabScreenProps } from '../types';
import tw from 'twrnc'

const image = {uri: "https://www.globe.gov/o/globe-gov-measurements-portlet/img/map-background.png"}
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <SafeAreaView style={tw``}>
        <HomeScreenHeader />
        <ImageBackground style={[tw`h-full`,styles.image]} source={image}>
        
        </ImageBackground>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image:{
    // flex: 1,
    // resizeMode: 'cover',
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
