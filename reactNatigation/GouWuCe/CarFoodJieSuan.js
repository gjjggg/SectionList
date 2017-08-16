/**
 * Created by guohongan on 2017/8/3.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

export default class carFoodJieSuan extends Component {

    static  defaultProps = {
        allPrice:React.PropTypes.object,
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


                <Text style={styles.shangchuText}>
                       合计:
                </Text>
                <Text style={styles.priceText}>
                    {this.props.allPrice}
                </Text>

                <TouchableOpacity style={styles.jiesuanBtn} >
                    <Text style={styles.hejiText}>
                        去结算
                    </Text>
                </TouchableOpacity>

            </View>
        );
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
    jiesuanBtn:{
        position:'absolute',
        right:0,
        top:0,
        width:210/2,
        height:98/2,
        backgroundColor:'#ff8202',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    hejiText:{
        color:'#ffffff',
        fontSize:30/2
    },
    shangchuText:{
        marginLeft:271/2,
        marginTop:16/2,
        fontSize:28/2,
        color:'#1c1b20',


    },
    priceText:{
        color:'#ff8202',
        fontSize:28/2,
        marginTop:16/2,
        marginLeft:1
    },
});