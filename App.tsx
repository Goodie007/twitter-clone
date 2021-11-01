import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNav from './src/Navigation/BottomNav';
import RootNavBar from './src/Navigation/RootNavBar';
import HomeScreen from './src/screens/HomeScreen';
import NewTweetScreen from './src/screens/NewTweetScreen';
import NotificationNav from './src/Navigation/NotificationNav'

export default function App() {
  return (
    <View style={styles.container}>
      <RootNavBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
