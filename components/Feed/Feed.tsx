import React from 'react';
import { Text, View, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import tweets from '../../data/tweets';
import Tweet from '../Tweet/Tweet';



export default function Feed(){
    const navigation = useNavigation();


    const onPress = () => {
        navigation.navigate( 'NewTweet');
    };


    const renderItem = ({item}: any) => <TouchableOpacity onPress={onPress}><Tweet tweet={item} /></TouchableOpacity>


    return (
        <View style={{width: '100%'}}>
            <FlatList 
              data={tweets}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
        />
        </View>
        
    )
}