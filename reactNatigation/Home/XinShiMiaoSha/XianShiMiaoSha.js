/**
 * Created by guohongan on 2017/6/30.
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

//import {px2dp} from '../../Tool/Tool'

export default class gouwuche extends Component {
    static  defaultProps = {
        display_list:React.PropTypes.object
    }
    renderOneLeftImage=()=>{
        return(

           <View>
           </View>
        )
    }
    renderRightTwoImage=()=>{
        return(
         <View>
         </View>
        )
    }

    render() {
        console.log(this.props.display_list)
        const  {items} = this.props.display_list
        return (
            <View style={styles.xianshiViewStyle}>
                <TouchableOpacity style={styles.leftViewStyle} activeOpacity={0.95} onPress={this.renderOneLeftImage}>

                <Image source={{uri:items[0].img}} style={styles.leftImagestyle}/>
                </TouchableOpacity>
                <View style={styles.rightViewStyle}>
                <TouchableOpacity style={styles.rightImageStyle} activeOpacity={0.95} onPress={this.renderRightTwoImage}>
                <Image source={{uri:items[1].img}} style={styles.rightImageStyle}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.leftBottomStyle} activeOpacity={0.95}>
                <Image source={{uri:items[2].img}}  style={{ width:SCREEN_WIDTH*0.29333, height:SCREEN_WIDTH*0.28666666}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightBottomStyle} activeOpacity={0.95}>
                <Image source={{uri:items[3].img}} style={{ width:SCREEN_WIDTH*0.29333, height:SCREEN_WIDTH*0.28666666}}/>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    xianshiViewStyle:{
        flexDirection:'row',
        backgroundColor:'#f1f1f1',
        paddingTop:10,

    },
    leftViewStyle:{
      width:SCREEN_WIDTH*0.41333333,
        height:SCREEN_WIDTH*0.57333333,
    },
    rightViewStyle:{
      marginLeft:0.5,
        width:SCREEN_WIDTH- SCREEN_WIDTH*0.41333333,
        height:SCREEN_WIDTH*0.57333333,
    },
    leftImagestyle:{
        width:SCREEN_WIDTH*0.41333333,
        height:SCREEN_WIDTH*0.57333333,
        //backgroundColor:'#4fdefe'
    },
    rightImageStyle:{
        width:SCREEN_WIDTH*0.58666667,
        height:SCREEN_WIDTH*0.28666667,

    },
    leftBottomStyle:{


        width:SCREEN_WIDTH*0.29333333,
        height:SCREEN_WIDTH*0.28666666,
        backgroundColor:'#dfeede',
        position:'absolute',
        top:SCREEN_WIDTH*0.28666667+1,
        left:0,



    },
    rightBottomStyle:{
        width:SCREEN_WIDTH*0.29333,
        height:SCREEN_WIDTH*0.28666666,
        backgroundColor:'#dfef45',
        position:'absolute',
        top:SCREEN_WIDTH*0.28666667+1,
        left:SCREEN_WIDTH*0.29333+1,

    },

});