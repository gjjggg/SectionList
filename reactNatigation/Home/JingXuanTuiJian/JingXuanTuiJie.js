/**
 * Created by guohongan on 2017/6/29.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class jingxuanTuiJian extends Component {
    static  defaultProps = {


    }
    render() {
        return (
            <View style={styles.TuiJianStyleBig}>
                <View style={styles.pinPatTuiJianStyle}>
                    <Image  source={require('../../images/title_point_r_left@2x.png')}/>
                    <Text style={{marginLeft:10}}>
                        精选推荐
                    </Text>
                    <Image source={require('../../images/title_point_r_right@2x.png')} style={{marginLeft:10}}/>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TuiJianStyleBig:{

        flex:1,
        width:SCREEN_WIDTH,
        backgroundColor:'#ededed',
        paddingTop:10
    },
    pinPatTuiJianStyle:{
        width:SCREEN_WIDTH,
        height:SCREEN_WIDTH*0.10666,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'#ffffff',

    },
    tuiLeftImageStyle:{


    },
});