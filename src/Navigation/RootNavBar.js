import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomNav from '../../src/Navigation/BottomNav';



const Root = createStackNavigator();




export default function RootNavBar(){
	return(
		<NavigationContainer>
		  <Root.Navigator>
		    <Root.Screen component={BottomNav} name="Home" />
		  </Root.Navigator>
		</NavigationContainer>
		)
}