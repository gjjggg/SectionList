/**
 * Created by guohongan on 2017/6/13.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import  Anniu from  './anniu'
export default class me extends Component {

    static  defaultProps = {

        selectedHeader:React.PropTypes.object,

    }
    _slecdd=()=>{

        console.log('sssdsd')
    }
    render() {
        return (
           <Anniu selectedHeader = {this._slecdd}/>
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