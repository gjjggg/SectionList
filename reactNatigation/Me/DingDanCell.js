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
                <Image  source={require('../images/待付款@2x.png')}/>
                <Text style={styles.bottomText}>
                    商品收藏
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
        backgroundColor: '#ffffff',
        width:SCREEN_WIDTH/5,
        height:162/2,



    },
    imageDingDanStyle: {
       marginTop:44/2,
       marginLeft:54/2,
       height:36/2,
       width:36/2,
       resizeMode:Image.resizeMode.contain

    },
    bottomText: {
        textAlign: 'center',
        color: '#1c1b20',
        fontSize:24/2,
        marginTop:25/2
    },
});