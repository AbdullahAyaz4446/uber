// Screens/HomeScreen.js
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <Text style={tw`text-red-500 p-10`}>hello i am the Home Screen</Text>
        </SafeAreaView>
    );

}



export default HomeScreen;
