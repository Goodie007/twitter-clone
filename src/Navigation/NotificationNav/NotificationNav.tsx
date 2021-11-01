import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import All from '../../components/All/All';
import Mentions from '../../components/Mentions/Mentions';



const Top = createMaterialTopTabNavigator();


export default function NotificationNav(){
    return(
        <View style={styles.container}>
        <Top.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarLabelStyle: { fontSize: 14,},
            }}>
            <Top.Screen component={All} name="All" />
            <Top.Screen component={Mentions} name="mentions" />
        </Top.Navigator>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    }
})