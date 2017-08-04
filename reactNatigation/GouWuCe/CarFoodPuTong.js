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

export default class CarFoodPuTong extends Component {
    static  defaultProps = {
        itemFooderDelect:React.PropTypes.object,
        selectedFooderDelect:React.PropTypes.object,
        //selectedFooderShanChu:React.PropTypes.object,
      //  selectedFooderShouCang:Rect.PropTypes.object,
    }
    render() {
        var  aa = this.props.itemFooderDelect === '2' ?require('../images/img_shoppingcar_selected_h@2x.png'):require('../images/img_shoppingcar_selected_n@2x.png')
        return (
            <View style={styles.container}>
                <View style={styles.xianView}/>
                <TouchableOpacity style={styles.quanXuanBtn} onPress={this.props.selectedFooderDelect}>
                    <Image  source={aa} style={styles.quanXuanImage}/>
                    <Text style={styles.quanXuanText}>
                        全选
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.shanchuBtn}>
                    <Text style={styles.shangchuText}>
                        删除
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.shoucangBtn} >
                    <Text style={styles.shoucangText}>
                        收藏
                    </Text>
                </TouchableOpacity>

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
        height:98/2,

    },
    xianView:{
        position:'absolute',
        left:0,
        top:0,
        width:SCREEN_WIDTH,
        height:0.5,
        backgroundColor:'#aaaaaa'

    },
    quanXuanBtn: {
        position:'absolute',
        left:0,
        top:0.5,
        height:98/2,
        width:(20+35+20+70)/2,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white'

    },
    quanXuanImage: {
        height:35/2,
        width:35/2,
        marginLeft:10,
        backgroundColor:'white'

    },
    quanXuanText: {
        marginLeft:10,
        //backgroundColor:'#f8f432',
        fontSize:30/2,
        color:'#1c1b20',

    },
    shanchuBtn:{
        position:'absolute',
        right:10,
        top:(98/2-56/2)/2,
        width:120/2,
        height:56/2,
        backgroundColor:'#f4f4f4',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    shangchuText:{
        color:'#1c1b20',
        fontSize:30/2
    },
    shoucangBtn:{
        position:'absolute',
        right:10+120/2+10,
        top:(98/2-56/2)/2,
        width:120/2,
        height:56/2,
        backgroundColor:'#ff8202',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    shoucangText:{
        color:'#ffffff',
        fontSize:30/2
    },
});