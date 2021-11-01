import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Tweets from '../components/TweetContainer/Tweets';
import Feed from '../components/Feeds/Feed';
import NewTweetButton from '../components/NewTweetButton/NewTweetButton';



export default function HomeScreen(){
    return(
        <View>
            <Feed />
            <NewTweetButton />
        </View>
    )
}