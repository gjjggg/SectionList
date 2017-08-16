/**
 * Created by guohongan on 2017/6/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    AlertIOS
} from 'react-native';

var Dimensions = require('Dimensions')
var {width} = Dimensions.get('window')
var {height} = Dimensions.get('window')

import ScrollableTabView, {ScrollableTabBar}from 'react-native-scrollable-tab-view';

import NavigateView from '../Tool/navigateview';
import NetWorking from '../Tool/NetWorking'
import Config  from  '../Tool/Config'
import TuiJian from  './TuiJian'
import  TeChan from  './TeChan'
export default class Home extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
             allChildArr:[],

        };
      }


    // 组件要不要更新
    shouldComponentUpdate() {
       // console.log('shouldComponentUpdate','组件要不要更新');
        return true;
    }
    // 组件将要更新{
    componentWillUpdate(){
      //  console.log('componentWillUpdate','组件将要更新');
    }

    // 即将拿到组件的更新
    componentWillReceiveProps(props) {
        //console.log('componentWillReceiveProps',props);
    }

    // 组件已经更新
    componentDidUpdate() {
       // console.log('componentDidUpdate','组件更新完成');
    }

    // 组件将要加载
    componentWillMount() {
       // console.log('componentWillMount','组件将要加载');
    }

    componentWillUnmount(){
       // console.log('componentWillMount','组件将要消失');
    }

    // 在调用render之后,组件已经加载
    componentDidMount() {

       // console.log(this.props.navigation);

        console.log('111111');

        // 不可变量 与let相对应
        const { dispatch,goBack,navigate,setParams,state } = this.props.navigation;

        // const {goBack} = this.props.navigation;

        //
        // goBack();



        this.props.navigation.setParams({
            title:'first',
            shouSuoOnPress:this.shouSuoOnPress
        });


      //  console.log('componentDidMount','组件加载完成');

        let url = `${Config.api.baseRootUrl}Channel/lists.json`;
        NetWorking.get(url,(data)=>{
            console.log(data)
            this.setState({

                allChildArr:data,
            })


        },(error)=>{
           console.log(error);
        });


    }



    static  navigationOptions = ({navigation,screenProps}) => ({
            header:(

                <NavigateView  searchKuang={ () => navigation.state.params.shouSuoOnPress(navigation) }
                               searchButton={ ()=>navigation.state.params.shouSuoOnPress(navigation) }
                               navtitle = {navigation.state.params?navigation.state.params.title:'jaja'}

                />
            )
    });



    shouSuoOnPress = (navigation) => {
       // alert('点击headerLeft');

       navigation.navigate('SouSuoVC',{

       });

    }
    render() {
    //{this.renderChildView()}
        return (
        this.state.allChildArr?
            <ScrollableTabView   renderTabBar = {() => <ScrollableTabBar/>}
                tabBarPosition="top"
                tabBarUnderlineStyle={{backgroundColor:'#ed6d00',height:2 }}
                tabBarActiveTextColor = "#ed6d00"
                tabBarInactiveTextColor = "#c0c0c0"
                tabBarBackgroundColor='white'
                removeClippedSubviews={true}
                tabBarTextStyle={{fontSize:15}}
                initialPage = {0}
                style={{backgroundColor:'white',height:40 }}
             >

                {this.renderChildView()}
             </ScrollableTabView>
        :null
        );
    }
    renderChildView =() => {
       // console.log(this.state.allChildArr);
        let allChildView = [];
      for (let i=0;i<this.state.allChildArr.length;i++){

        //  console.log(this.state.allChildArr[i]);



          if (this.state.allChildArr[i].channel_name === "特产馆"){

              allChildView.push(
                  <TeChan tabLabel={this.state.allChildArr[i].channel_name} key={i} dchannel_id={this.state.allChildArr[i].id}/>
              );

          }else{
              allChildView.push(
                  <TuiJian tabLabel={this.state.allChildArr[i].channel_name} key={i} dchannel_id={this.state.allChildArr[i].id}/>
              );
          }

       }

       return allChildView

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    navigationBarStyle:{
        marginLeft:10,
        // marginBottom: 5,
        height:34,
        width:width-10-10-10-30,
        backgroundColor:'#ededed',
        marginTop:24,
        borderRadius:4,
        flexDirection:'row',

        alignItems:'center',

    },
    navigationBarImage:{
        marginRight:10,
        width:28,
        height:28,
        marginTop:26,
        resizeMode:Image.resizeMode.contain

    },
    shouSuoImage:{
      marginLeft:10,
      marginTop:3,
      width:20,
      height:20,
      resizeMode:Image.resizeMode.contain
    },
    shousuoText:{
        marginBottom:5,
        height:24,
        textAlign: 'center',
        color:'gray',
        fontSize:13,


    }
});
