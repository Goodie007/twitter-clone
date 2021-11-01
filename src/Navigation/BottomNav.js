import React from 'react';
import {View, Text} from 'react-native';
import {Entypo, MaterialCommunityIcons, AntDesign} from 'expo-vector-icons'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../src/screens/HomeScreen';
import Notifications from '../screens/Notifications';
import Bookshop from '../screens/Bookshop';
import More from '../screens/More';


const Tab = createBottomTabNavigator();




export default function BottomTabNav(){
	return(
		<Tab.Navigator
		   screenOptions={{
			   tabBarShowLabel: false,
			   headerShown: false
		   }}>

		  <Tab.Screen 
		      component={HomeScreen} 
			  name="home"
			  options={{
				tabBarIcon: ({color}) => (
					<Entypo name="home" color={color} size={25} />
				),
		      }} 
		 />

		  <Tab.Screen 
		    component={Notifications} 
			name="notifications"
			options={{
				tabBarIcon: ({color}) => (
					<MaterialCommunityIcons name="bell" color={color} size={25} />
				),
			}}  
		 />

		  <Tab.Screen 
		     component={Bookshop} 
			 name="bookshop" 
			 options={{
				tabBarIcon: ({color}) => (
					<AntDesign name="database" color={color} size={23} />
				),
			}} 
		  />

		  <Tab.Screen 
		     component={More} 
			 name="more" 
			 options={{
				tabBarIcon: ({color}) => (
					<Entypo name="menu" color={color} size={25} />
				),
			}} />
		</Tab.Navigator>
		)
}