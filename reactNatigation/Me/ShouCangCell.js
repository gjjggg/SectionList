/**
 * Created by guohongan on 2017/8/7.
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

export default class shoucangCell extends Component {

    static  defaultProps = {

        selectedHeader:React.PropTypes.object,

    }
    render() {
        return (

           <TouchableOpacity style={styles.container}>
             <Text style={styles.topText}>
               2
             </Text>
             <Text style={styles.bottomText}>
              商品收藏
             </Text>
           </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width:SCREEN_WIDTH/2,
        height:125/2,
        borderRightColor:'#f4f4f4',
        borderRightWidth:0.5

    },
    topText: {
        fontSize: 36/2,
        textAlign: 'center',
        color:  '#ff8202',
        marginTop:31/2,
    },
    bottomText: {
        textAlign: 'center',
        color: '#1c1b20',
        fontSize:24/2,
        marginTop:13/2
    },
});