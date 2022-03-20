/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  NewTweet: undefined;
  Message: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Home: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type TweetType = {
  id: string,
  user: UserType,
  createdAt: string,
  content: string,
  image?: string,
  numberOfComments?: number,
  numberOfRetweets?: number,
  numberOfLikes?: number,
};

export type UserType = {
  id: string,
  name: string,
  username: string,
  image?: string
};

export type MessageType = {
  id: string,
  user: UserType,
  sentAt: string,
  content: string,
  image?: string,
};

export type NotificationType = {
  id: string,
  user: UserType,
  sentAt: string,
  content: string,
  
};

export type AccountType = {
  id: string,
  user: UserType,
  image: string,
};

export type ProfileType = {
  id: string,
  user: UserType,
  image?: string,
};


