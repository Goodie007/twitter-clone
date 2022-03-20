import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture/ProfilePicture';


export type LeftMessageContainerProps = {
    user: UserType,
}



export default function LeftMessageContainer({ user }: LeftMessageContainerProps){
    return (
        <View>
            <ProfilePicture image={user.image} size={60} />
        </View>
    )
}