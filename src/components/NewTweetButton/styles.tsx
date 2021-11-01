import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';


const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        position: 'absolute',
        bottom: 50,
        right: 30,
        width: 70,
        height: 70,
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles;