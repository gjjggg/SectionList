/**
 * Created by guohongan on 2017/7/31.
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

export default class CarCellPuTong extends Component {
    render() {
        return (
          <TouchableOpacity style={styles.container}>
              <TouchableOpacity  style={styles.selectBtn}>
                  <Image source={require('../images/img_shoppingcar_selected_n@2x.png')} style={styles.selectimage}/>
              </TouchableOpacity>
              <Image  style={styles.cellImage}/>
              <View style={styles.viewRifght}>
                  <Text style={styles.titleTextStyle}  numberOfLines={2}>
                   刁小姐 哈飒飒的嘎哈大哥大法官阿凡达会覆盖大富大贵法规的法规打得过法规的法规噶的还得法规的法规的干哈的发货单发的发挥大换个梵蒂冈
                  </Text>

                  <Text style={styles.titleTextStyle}>
                      颜色：淡粉色
                  </Text>

                  <Text style={styles.priceStyle}>
                      ￥429.00
                  </Text>

                  <View style={styles.jiajianStyle}>

                  </View>

              </View>

          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor: 'white',
        justifyContent:'flex-start',
        alignItems:'center',
        width:SCREEN_WIDTH,
        height:197/2,
    },
    selectBtn:{
       marginLeft:0,
       width:(35+22+22)/2,
       height:(35+22+22)/2,
        justifyContent:'center',
        alignItems:'center',
    },
    selectimage:{
        width:35/2,
        height:35/2,

    },
    cellImage:{
        marginLeft:0,
        marginTop:15/2,
        width:168/2,
        height:168/2,
        backgroundColor: 'red',
    },
    viewRifght:{
       marginTop:0,
       marginLeft:22/2,
       marginRight:0,
       height:197/2,
    },
    titleTextStyle:{
        marginTop:26/2,
        marginLeft:0,
        marginLeft:30/2,
        fontSize:24/2,
        color:'#1c1b20',

    },
    guigeStyle:{
    marginTop:10/2,
    marginLeft:0,
    fontSize:24/2,
    color:'#aaaaaa',

    },
    priceStyle:{
        marginLeft:0,
        marginBottom:32/2,
        fontSize:28/2,
        color:'#ff8202',
    },
    jiajianStyle:{
       position:'absolute',
       right:20/2,
       height:42/2,
       width:(50+44+50)/2,
       backgroundColor:'red'

    }


})