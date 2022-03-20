import * as React from 'react';
import { StyleSheet } from 'react-native';
import Feed from '../components/Feed/Feed';

import { Text, View } from '../components/Themed';
import Tweet from '../components/Tweet/Tweet';
import tweets from '../data/tweets';
import NewTweetButton from '../components/NewTweetButton/NewTweetButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed />
      <NewTweetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
