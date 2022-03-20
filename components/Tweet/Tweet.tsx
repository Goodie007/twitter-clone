import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import LeftContainer from '../LeftContainer/LeftContainer';
import MainContainer from '../MainContainer/MainContainer';
import { TweetType } from '../../types';
import styles from './style';






export type TweetProps = {
    tweet: TweetType
}



export default function Tweet({ tweet }: TweetProps){
    return (
        <View style={styles.container}>
            <LeftContainer user={tweet.user} />
            <MainContainer tweet={tweet} />
        </View>
    )
}