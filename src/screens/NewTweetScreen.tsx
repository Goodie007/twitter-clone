import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, TextInput} from "react-native";
import {AntDesign} from 'expo-vector-icons';

import Colors from "../constants/Colors";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";




export default function NewTweetScreen(){

    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                 <AntDesign name="close" size={30} color={Colors.light.tint} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Tweet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.newTweetContainer}>
                <ProfilePicture image={'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jpg'} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={"What's happening"} 
                    style={styles.tweetInput}
                    numberOfLines={3}
                    multiline={true}
                />
                <TextInput
                    style={styles.imageInput}
                    placeholder={"Image url {optional}"} 
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
    },

    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 15,
    },

    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
    },

    buttonText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },

    inputContainer: {
        flexDirection: 'row'
    },

    newTweetContainer: {
        flexDirection: 'row',
        padding: 15,
    },

    tweetInput: {
        height: 100,
        maxHeight: 300,
    },

    imageInput: {
        
    }
})