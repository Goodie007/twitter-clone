import React from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import messages from '../../data/messages';
import Message from '../Message/Message';



export default function MessagePage(){

    const navigation = useNavigation();


    const onPress = () => {
        navigation.navigate( 'Message');
        console.log("Hello Wolrd");
    };

    const renderItem = ({item}: any) => <TouchableOpacity onPress={onPress}><Message message={item} /></TouchableOpacity>
    
    return (
       
        <View style={{width: '100%'}}>
            <FlatList 
              data={messages}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
        />
        </View>
        
    )
}