/**
 * Created by root on 3/25/17.
 */
import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    navBar: {
        backgroundColor: '#fff'
    },
    navBarTitle:{
        color:'#989898'
    },
    barButtonTextStyle:{
        color:'#FFFFFF'
    },
    barButtonIconStyle:{
        tintColor:'rgb(255,255,255)'
    }
})