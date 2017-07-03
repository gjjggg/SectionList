/**
 * Created by guohongan on 2017/6/13.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 50;
const STATUS_BAR_HEIGHT = 20;
export default class newOne extends Component {
     static  propTypes= {
         style:View.propTypes.style,
         title:PropTypes.string,
         titleView:PropTypes.element,
         hide:PropTypes.bool,
         leftButton:PropTypes.element,
         rightButton:PropTypes.element,

     }
     // 构造
       constructor(props) {
         super(props);
         // 初始状态
         this.state = {
             title:'',
             hide:false
         };
       }


    render() {
        let titleView = this.props.titleView?this.props.titleView:<Text>{this.props.title}</Text>
        let content = <View>
            {this.props.leftButton}
            {titleView}
            {this.props.rightButton}
        </View>
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },

});