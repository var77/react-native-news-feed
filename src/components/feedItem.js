import React, {Component} from 'react';
import {View, Text, ListView, ScrollView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'underscore';
import Styles from '../styles/feed';
import MainStyles from '../styles';

export default class FeedItem extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: () => false});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.pictures)
        };
    }


    renderItem(picture) {
        return (
            <View style={[MainStyles.flex, MainStyles.flexCenter]}>
                <View style={Styles.content}>
                    <Image source={{uri: picture.url}} style={Styles.feedImage} resizeMode='contain'/>
                </View>
                <View style={Styles.bottom}>
                    <View style={[MainStyles.flex, MainStyles.flexCenter, MainStyles.flexRow]}>
                        {_.range(3).map(i => <Icon size={32} key={i} name={`star${picture.rating >= i + 1? '': '-o'}`}/>)}
                    </View>
                    <TouchableOpacity style={[MainStyles.flex, MainStyles.flexCenter, Styles.messageButton]}>
                        <Icon size={32} name="comment"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[MainStyles.flex, MainStyles.flexCenter]}>
                        <Icon size={32} name="share"/>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }

    render() {
        return (
            <View style={{height: 500}}>
                <View style={Styles.header}>
                    <Image source={{uri: this.props.avatar}} style={Styles.avatar}/>
                    <Text>{this.props.username}</Text>
                    <TouchableOpacity>
                        <Icon size={24} name="ellipsis-h"/>
                    </TouchableOpacity>
                </View>
                <View style={Styles.content}>
                    <ListView
                        pagingEnabled
                        directionalLockEnabled
                        horizontal
                        dataSource={this.state.dataSource}
                        renderRow={this.renderItem.bind(this)}
                    />
                </View>
            </View>
        )
    }
}