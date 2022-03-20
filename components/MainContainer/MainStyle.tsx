import { StyleSheet } from "react-native";


const MainStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },

    tweetHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    tweetHeaderName: {
        flexDirection: 'row',
    },

    name: {
        marginRight: 5,
        fontWeight: 'bold',
    },

    username: {
        marginRight: 5,
        color: 'grey',
    },

    createdAt: {
        marginRight: 5,
    },

    moreIcons: {
        alignSelf: 'flex-end',
    },

    content: {
        marginTop: 5,
        lineHeight: 18,
    },

    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: 'hidden',
    }
});


export default MainStyle;