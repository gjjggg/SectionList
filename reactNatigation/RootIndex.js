/**
 * Created by guohongan on 2017/8/1.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Provider} from  'react-redux';
import ConfigureStore from './JS/store/ConfigureStore';
const store = ConfigureStore();

import App from './APP'
export default class Root extends Component {
    render() {
        return (
            <Provider store={store} >

                <App />

            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
