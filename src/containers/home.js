import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actionCreators from '../actions';

import MainStyles from '../styles';
import Feed from '../components/feed';
import BottomTabs from '../components/bottomTabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import data from '../data/users';
class Home extends Component {
    static renderRightButton(props){
        return <Icon name="search" size={20}/>;
    }

    static renderLeftButton(props){
        return <Icon name="envelope-o" size={20}/>;
    }

    render() {
        return (
            <View style={MainStyles.container}>
                <Feed feed={data}/>
                <BottomTabs />
            </View>
        )
    }
}

const mapStateToProps = state => ({

});

const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(Home);