import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';


const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        position: 'absolute',
        bottom: 40,
        right: 20,
        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems:'center',
        justifyContent: 'center',
    }
});



export default styles;