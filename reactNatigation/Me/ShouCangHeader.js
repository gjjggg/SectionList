/**
 * Created by guohongan on 2017/8/8.
 */
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
        shenzheBtn:React.PropTypes.object,

    }
    render() {
        return (
            <Image style={styles.container}>
                <TouchableOpacity style={styles.leftTouchableStyle} onPress={this.props.shenzheBtn}>
                   <Image  source={require('../images/设置@2x.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightTouchableStyle}>
                    <Image  source={require('../images/消息@2x.png')}/>
                </TouchableOpacity>
                <Image source={require('../images/官方客服@2x.png')} style={styles.imageDingDanStyle}>

                </Image>
                <Text style={styles.titleTextStyle}>
                    戴帽子的鱼会微笑
                </Text>
                <View style={styles.haoPingTextStyle}>
                    <Text >
                        好评分666666
                    </Text>
                </View>

            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:SCREEN_WIDTH,
        height:374/2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6d6da',
    },
    leftTouchableStyle:{
        position:'absolute',
        top:22/2,
        left:24/2,
        width:44/2,
        height:44/2,


    },
    rightTouchableStyle:{
        position:'absolute',
        top:22/2,
        right:24/2,
        width:44/2,
        height:44/2,

    },
    imageDingDanStyle: {
        marginTop:83/2,
        height:136/2,
        width:136/2,
        resizeMode:Image.resizeMode.contain,
        borderRadius:136/4,
        borderWidth:2,
        borderColor:'#ffffff',

    },
    titleTextStyle: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize:26/2,
        marginTop:24/2
    },
    haoPingTextStyle:{
        width:206/2,
        height:40/2,
        opacity:0.5,
        marginTop:15/2,
        borderRadius:12,
        backgroundColor:'#e79146',
        justifyContent:'center',
        alignItems:'center',


    }
});