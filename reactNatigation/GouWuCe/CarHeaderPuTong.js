/**
 * Created by guohongan on 2017/7/29.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class CarHeaderPuTong extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.xianView}/>
                <TouchableOpacity style={styles.quanXuanBtn}>
                    <Image  source={require('../images/img_shoppingcar_selected_n@2x.png')} style={styles.quanXuanImage}/>

                </TouchableOpacity>

                <TouchableOpacity style={styles.dianPuBtn}>
                    <Image  source={require('../images/icon_shoppingcar_shop@2x.png')} style={styles.dianpuImage}/>
                    <Text style={styles.dianpuText}>
                        美颜秘笈
                    </Text>
                    <Image  source={require('../images/img_shoppingcar_jiantou@2x.png')} style={styles.dianpujiantouImage}/>

                </TouchableOpacity>
                <View style={styles.dixianView}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        flexDirection:'row',
        backgroundColor: 'white',
        justifyContent:'flex-start',
        width:SCREEN_WIDTH,
        height:(69+15)/2,

    },
    xianView:{
        position:'absolute',
        left:0,
        top:0,
        width:SCREEN_WIDTH,
        height:15/2,
        backgroundColor: '#f7f7f7',
    },
    quanXuanBtn:{
        marginLeft:0,
        marginTop:15/2,
        width:(20+20+35)/2,
        height:69/2,
        //backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
    },
    quanXuanImage:{
        width:35/2,
        height:35/2

    },
    dianPuBtn:{
       width:SCREEN_WIDTH-(20+20+35)/2,
       height:69/2,
       flexDirection:'row',
       justifyContent:'flex-start',
       alignItems:'center',
       //backgroundColor:'red',
       marginTop:15/2,

   },
    dianpuImage:{
       width:27/2,
       height:26/2,
       marginLeft:22/2,

    },
    dianpuText:{
        fontSize:15,
        color:'#1c1b20',
        marginLeft:22/2
    },
    dianpujiantouImage:{
        marginLeft:11,
        width:11/2,
        height:18/2,
    },
    dixianView:{
        width:SCREEN_WIDTH,
        backgroundColor:'#f4f4f4',
        position:'absolute',
        top:(69+15)/2-0.5,
        height:0.5

    },

})