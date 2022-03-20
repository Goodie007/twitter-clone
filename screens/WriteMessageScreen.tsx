import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import {View, Text, 
    TouchableOpacity,
     StyleSheet, 
     SafeAreaView,
    Image, TextInput} from 'react-native';
import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';


export interface Imessage {
    _id: string | number
    text: string
    createdAt: Date | number
    image?: string
    video?: string
    audio?: string
    system: boolean
    sent?: boolean
    recieved?: boolean
    pending?: boolean
    
}






export default function WriteMessageScreen(){
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
           
        ])
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);


    return(
        <GiftedChat
           alwaysShowSend={true}
           renderUsernameOnMessage={true}
           messages={messages} 
           onSend={messages => onSend(messages)}
           user={{
               _id: 1,
           }}
        />
    )
}