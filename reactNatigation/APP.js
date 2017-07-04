/**
 * Created by guohongan on 2017/6/13.
 */

// require('./Tool/Global');

import Global from './Tool/Global'
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import  React from 'react';
import {
    Image,
    StyleSheet,
    Text,
} from  'react-native'

import ShouYe from './Home/Home';
import FenLei from './FenLei/Fenlei';

import GouWuChe from './GouWuCe/gouwuche';
import Me from  './Me/me';

const  shouyetun = require('./images/btnH-n.png');
const  shouyetul = require('./images/btnH-l.png');

const  fenleitun = require ('./images/btnD-n.png');
const  fenleitul = require ('./images/btnD-l.png');

const  gouwutun = require ('./images/btnQ-n.png');
const  gouwutul = require ('./images/btnQ-l.png');

const metun = require ('./images/btnM-n.png');
const metul = require('./images/btnM-l.png');

import SouSuoVC  from  './Home/SouSuo/sousuo';
import SouSuoListVC from  './FenLei/SouSuoList/SeachList'

const MyTab = TabNavigator({
    ShouYe: {
        screen: ShouYe,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: (({thintColor, focused}) => {
                return (
                    < Image
                        source={!focused?shouyetun:shouyetul}
                        style={[{height:25,width:25}]}
                    />
                )
            })
        }
    },
    FenLei: {
        screen: FenLei,
        navigationOptions: {
            tabBarLabel: '分类',
            tabBarIcon: (({thintColor, focused}) => {
                return (
                    <Image
                        source={!focused?fenleitun:fenleitul}
                        style={[{height:25,width:25}]}
                    />
                )
            })

        }

    },
    GouWuChe: {
        screen: GouWuChe,
        navigationOptions: {
            tabBarLabel: '购物车',
            tabBarIcon: (({thintColor, focused}) => {
                return (
                    < Image
                        source={!focused?gouwutun:gouwutul}
                        style={[{height:25,width:25}]}
                    />
                )
            })


        }


    },
    Me: {
        screen: Me,
        navigationOptions: {
            tabBarLabel: '我的',

            tabBarIcon: (({thintColor, focused}) => {
                return (
                    < Image
                        source={!focused?metun:metul}
                        style={[{height:28,width:28}]}
                    />
                )
            })
        }

    },
 },{
    tabBarPosition:'bottom',
    swipeEndabled:false,
    animationEnabled:false,
    lazy:true,
    tabBarOptions:{
         //activeTintColor:'#ed6d00',
         style:{
           height:60
         },
        labelStyle:{
            marginBottom:5,
        }

    },
    //tintColor:'red',


 });

const MyNav = StackNavigator({
    MyTab:{
        screen:MyTab,
    },
    SouSuoVC:{
        screen:SouSuoVC,
    },
    SouSuoListVC:{
        screen:SouSuoListVC,
    }

});

export default MyNav;
