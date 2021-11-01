import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from 'expo-vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 

import styles from './styles';




export default function NewTweetButton() {
    const navigation = useNavigation(); 

    const onPress = () => {
        navigation.navigate('NewTweet'); 
        console.warn("hello");
    } 

    return(
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.8}
            onPress={onPress}
        >
             <MaterialCommunityIcons name={"feather"} size={30} color="white" /> 
        </TouchableOpacity>
    )
}