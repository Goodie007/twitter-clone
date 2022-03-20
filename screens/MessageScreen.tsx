import * as React from 'react';
import { StyleSheet, TouchableOpacity, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Message from '../components/Message/Message';
import messages from '../data/messages';
import MessagePage from '../components/MessagePage/MessagePage'

export default function MessageScreen() {
  return (
    <View>
        <MessagePage />
    </View>
  );
}
