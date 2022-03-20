import React, { useState, useEffect } from 'react';
import {View, Text, 
    TouchableOpacity,
     StyleSheet, 
     SafeAreaView,
     Platform,
    Image, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ProfilePicture from '../components/ProfilePicture/ProfilePicture';





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
                    <ProfilePicture image={'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jp'} />
                    <View style={styles.inputsContainer}>
                        <TextInput
                           style={styles.textInput}
                           multiline={true} 
                           numberOfLines={3}
                           placeholder={"What's happening"}
                        />
                       <TextInput 
                          style={styles.imageInput}
                          placeholder={"Image url{optional}"}
                        />
                        
                       <TouchableOpacity>
                          <Text style={styles.pickImage}>Pick a image</Text>
                          </TouchableOpacity>
                          <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jp'  }} style={styles.image} />
                   </View>
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
        justifyContent: 'space-between',
        padding: 15,

    },

    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 20
    },

    buttonText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },

    newTweetContainer: {
        flexDirection: 'row',
        padding: 15,
    },

    inputsContainer: {
        marginLeft: 10,
    },

    textInput: {
        maxHeight: 300,
        height: 100,

    },

    imageInput: {
    },

    pickImage: {
        fontSize: 18,
        color: Colors.light.tint,
        marginVertical: 10,
      },
      image: {
        width: 150,
        height: 150,
      }
});





