import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/HomeScreen';
import NewTweetScreen from '../../screens/NewTweetScreen'



const Stack = createStackNavigator();




export default function HomeNav(){
	return(
		  <Stack.Navigator>
		    <Stack.Screen 
			    component={HomeScreen}
			    name="Home" 
				options={{title: 'Home Screen'}} 
			/>
            <Stack.Screen 
			    component={NewTweetScreen} 
				name="NewTweet" 
				options={{title: 'NewTweet Screen'}} />
		  </Stack.Navigator>
		)
}