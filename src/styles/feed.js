/**
 * Created by root on 3/25/17.
 */
import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width,
        paddingHorizontal: 20,
        flexShrink: 0
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width,
        borderTopWidth: 2,
        borderColor: '#828282'
    },
    content: {
        flex: 4,
        width
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#000'
    },
    feedImage: {
        flex: 1,
        flexDirection: 'row',
        width
    },
    messageButton: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#969696'
    }
})