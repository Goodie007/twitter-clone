import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import LeftMessageContainer from './LeftMessageContainer/LeftMessageContainer';
import MainMessageContainer from './MainMessageContainer/MainMessageContainer';
import { MessageType } from '../../types';
import styles from './styles'






export type MessageProps = {
    message: MessageType
}



export default function Message({ message }: MessageProps){
    return (
        <View style={styles.container}>
            <LeftMessageContainer user={message.user} />
            <MainMessageContainer message={message} />

        </View>
    )
    
}