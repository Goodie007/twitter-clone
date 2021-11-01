import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';

import { TweetType }  from '../../../types/types';
import tweet from '../../../data/Tweets';
import styles from '../TweetContainer/styles';





export type TweetsProps = {
    tweet: TweetType

}


export default function Tweets({tweet}: TweetsProps){
    return(
        <View style={styles.container}>
            <LeftContainer user={tweet.user} />
            <MainContainer tweet={tweet} />
        </View>
    )
}