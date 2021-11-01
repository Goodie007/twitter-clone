import {StyleSheet} from 'react-native';


const Style = StyleSheet.create({
    container: {
        paddingTop: 5,
        flex: 1,
        marginHorizontal: 10,
    },

    tweetHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    tweetHeaderName: {
        flexDirection: 'row'
    },

    name: {
        marginRight: 5,
        fontWeight: 'bold',
    },

    username: {
        marginHorizontal: 5,
        color: 'grey',
    },

    createdAt: {
        marginRight: 5,
        color: 'grey',
    },

    content: {
        lineHeight: 18,
        marginTop: 5,
    },

    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: 'hidden',
        marginVertical: 10,
    }
})


export default Style;