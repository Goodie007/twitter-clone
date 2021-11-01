import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { EvilIcons, AntDesign, Feather } from 'expo-vector-icons';

import { TweetType } from '../../../../types/types';
import styles from './styles';


export type FooterContainerProps = {
    tweet: TweetType
}



export default function Footer({ tweet }: FooterContainerProps) {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Feather name={"message-circle"} size={20} color={'grey'} /> 
                <Text style={styles.number}>{tweet.numberOfComments}</Text>
            </View>
            <View style={styles.iconContainer}>
                <EvilIcons name={"retweet"} size={28} color={'grey'} /> 
                <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
            </View>
            <View style={styles.iconContainer}>
                <AntDesign name={"hearto"} size={20} color={'grey'} /> 
                <Text style={styles.number}>{tweet.numberOfLikes}</Text>
            </View>
            <View style={styles.iconContainer}>
                <EvilIcons name={"share-google"} size={28} color={'grey'} /> 
            </View>
        </View>
    )
}