import { Entypo, Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import moment from 'moment';


import { MessageType } from '../../../types';
import styles from './styles';


export type MainMessageContainerProps = {
    message: MessageType
}



export default function MainMessageContainer({ message }: MainMessageContainerProps){
    return (
        <View style={styles.container}>
            <View style={styles.messageHeaderContainer}>
                <View style={styles.messageHeaderName}>
                    <Text style={styles.name}>{message.user.name}</Text>
                    <Text style={styles.username}>@{message.user.username}</Text>
                    <Text style={styles.sentAt}>{moment(message.sentAt).fromNow()}</Text>
                </View>
            </View> 
           
            <View>
                <Text style={styles.content} numberOfLines={2}>{message.content}</Text>
            </View>
        </View>
    )
}