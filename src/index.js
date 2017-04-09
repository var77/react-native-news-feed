import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

import Home from './containers/home';
import navStyles from './styles/navStyles';

const store = createStore(reducer, applyMiddleware(thunk));


class StarringApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router navigationBarStyle={navStyles.navBar} titleStyle={navStyles.navBarTitle} barButtonTextStyle={navStyles.barButtonTextStyle} barButtonIconStyle={navStyles.barButtonIconStyle}>
                    <Scene key="root">
                        <Scene key="home" component={Home} initial title="Logo"/>
                    </Scene>
                </Router>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('starringApp', () => StarringApp);