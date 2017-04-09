import React, {Component} from 'react';
import {View, ListView} from 'react-native';

import FeedItem from './feedItem';
import Styles from '../styles/feed';
import MainStyles from '../styles';

export default class Feed extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: () => false});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.feed)
        };
    }

    render() {
        return (
            <View style={MainStyles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(feedItem) => (<FeedItem {...feedItem}/>)}
                />
            </View>
        )
    }
}