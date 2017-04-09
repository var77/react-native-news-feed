import React, {Component} from 'react';
import {View, Image} from 'react-native';

import Styles from '../styles/feed';
import MainStyles from '../styles';

export default class Avatar extends Component {
    render() {
        return (
            <View style={Styles.avatarContainer}>
                <Image source={{uri: this.props.image}} style={Styles.avatar}/>
            </View>
        )
    }
}