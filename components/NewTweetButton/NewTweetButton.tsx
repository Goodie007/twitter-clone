import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';





export default function NewTweetButton(){
    const navigation = useNavigation();


    const onPress = () => {
        navigation.navigate( 'NewTweet');
    };


    return(
        <TouchableOpacity 
           style={styles.button} 
           onPress={onPress}
           activeOpacity={0.8}
        >
            <MaterialCommunityIcons name={"feather"} size={30} color="white" />
        </TouchableOpacity>
    )
}