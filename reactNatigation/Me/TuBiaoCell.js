/**
 * Created by guohongan on 2017/8/8.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class dingdanCell extends Component {

    static  defaultProps = {

        selectedHeader:React.PropTypes.object,

    }
    render() {
        return (

            <TouchableOpacity style={styles.container}>
                <Image  source={require('../images/余额@2x.png')}/>
                <Text style={styles.bottomText}>
                    余额
                </Text>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        //  flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6d6da',
        width:SCREEN_WIDTH/4,
        height:162/2,
        borderBottomColor:'#f4f4f4',
        borderBottomWidth:0.5,



    },
    imageDingDanStyle: {
        marginTop:38/2,
        marginLeft:70/2,
        height:45/2,
        width:45/2,
        resizeMode:Image.resizeMode.contain

    },
    bottomText: {
        textAlign: 'center',
        color: '#1c1b20',
        fontSize:22/2,
        marginTop:24/2
    },
});