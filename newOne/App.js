/**
 * Created by guohongan on 2017/6/13.
 */
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
} from 'react-native';

import Test from './Test';
import Test2 from './Test2';
import Test3 from './Test3';


const btnDl = require('./../reactNatigation/images/btnD-l.png');
const btnDn = require('./../reactNatigation/images/btnD-n.png');

const btnHl = require('./../reactNatigation/images/btnH-l.png');
const btnHn = require('./../reactNatigation/images/btnH-n.png');

const MyTab = TabNavigator({
    Test:{
        screen:Test,
        navigationOptions:{
            headerTitle:'Test1',
            tabBarLabel: '测试1',
            tabBarIcon : (({tintColor,focused})=> {
                return(
                    <Image
                        source={!focused ? btnDn : btnDl}
                        style={[{height:35,width:35 }, {tintColor: tintColor}]}
                    />
                )
            })
        }
    },
    Test2:{
        screen:Test2,
        navigationOptions:{
            headerTitle:'Test2',
            tabBarLabel: '测试2',
            tabBarIcon : (({tintColor,focused})=> {
                return(
                    <Image
                        source={!focused ? btnHn : btnHl}
                        style={[{height:35,width:35 }]}
                    />
                )
            })
        }
    },
},{
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled:false,
    lazy:true,
    initialRouteName:'Test2',
    backBehavior:'none',
    tabBarOptions:{
        activeTintColor:'blue',
        activeBackgroundColor:'yellow',
        inactiveTintColor:'red',
        inactiveBackgroundColor:'orange',
        showLabel:false
        // labelStyle:{
        //     color:'green',
        // }
    }
});

const MyNav = StackNavigator({
    MyTab:{
        screen:MyTab,
    },
    Test3:{
        screen:Test3,

    }
});

export default MyNav;