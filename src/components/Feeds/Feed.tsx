import React from "react";
import { View, FlatList } from "react-native";

import tweet from "../../../data/Tweets";
import Tweets from "../TweetContainer/Tweets";



export default function(){
    return(
        <View style={{width: '100%'}}>
            <FlatList 
                data={tweet} 
                renderItem={({item}) => <Tweets tweet={item} />}
                keyExtractor={(item) => item.id}
           />
        </View>
    )
}