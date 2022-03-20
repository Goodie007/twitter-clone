import { Entypo, Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import moment from 'moment';


import { TweetType } from '../../types';
import MainStyle from './MainStyle';
import Footer from './Footer/Footer';


export type MainContainerProps = {
    tweet: TweetType
}



export default function MainContainer({ tweet }: MainContainerProps){
    return (
        <View style={MainStyle.container}>
            <View style={MainStyle.tweetHeaderContainer}>
                <View style={MainStyle.tweetHeaderName}>
                    <Text style={MainStyle.name}>{tweet.user.name}</Text>
                    <Text style={MainStyle.username}>@{tweet.user.username}</Text>
                    <Text style={MainStyle.createdAt}>{moment(tweet.createdAt).fromNow()}</Text>
                </View>
                <Entypo style={MainStyle.moreIcons} name={"chevron-down"} size={16} color={'grey'} />
            </View> 
           
            <View>
                <Text style={MainStyle.content}>{tweet.content}</Text>
                {!! tweet.image && <Image style={MainStyle.image} source={{ uri: tweet.image }} /> }
            </View>
            < Footer tweet={tweet} />
        </View>
    )
}