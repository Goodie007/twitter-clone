import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Entypo} from 'expo-vector-icons';
import moment from 'moment';

import { TweetType } from '../../../types/types';
import Style from '../TweetContainer/Style';
import Footer from '../TweetContainer/Footer';



export type MainContainerProps = {
    tweet: TweetType
}



export default function MainContainer({tweet}: MainContainerProps){
    return(
        <View style={Style.container}>
            <View style={Style.tweetHeaderContainer}>
                <View style={Style.tweetHeaderName}>
                    <Text style={Style.name}>{tweet.user.name}</Text>
                    <Text style={Style.username}>@{tweet.user.username}</Text>
                    <Text style={Style.createdAt}>{moment(tweet.createdAt).fromNow()}</Text>
                </View>
                <View>
                    <Entypo name="chevron-down" size={16} color={'grey'} /> 
                </View>
            </View>
            <View>
                <Text style={Style.content}>{tweet.content}</Text>
                { !! tweet.image && <Image style={Style.image} source={{ uri: tweet.image }} /> }
            </View>
            <Footer tweet={tweet}/>
        </View>
    )
}



