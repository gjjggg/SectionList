/**
 * Created by guohongan on 2017/6/15.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AlertIOS,
    DeviceEventEmitter
} from 'react-native';

import SouSuoNav from './SouSuoNav';


export default class sousuo extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            sousuoString:React.PropTypes.string,
            callText:'',
        };
      }


    componentDidMount() {
        console.log(this.props.navigation);
        currentPage:React.PropTypes.string
        // 不可变量 与let相对应
        const { dispatch,goBack,navigate,setParams,state } = this.props.navigation;

        // const {goBack} = this.props.navigation;

        //
        // goBack();

        this.props.navigation.setParams({
            title:'haha',
            quXiaoCPress:this.quXiaoCPress,
            souSuoPress:this.souSuoPress,
            call:this.call,
        });

        // console.log('componentDidMount','组件加载完成');
        this.msgListener = DeviceEventEmitter.addListener('Msg',(sousuoString) => {
            this.setState({
                sousuoString:sousuoString,
            })
        });
    }


    call= (text)=>{
        this.setState({
            callText:text,
        })
    }

    static navigationOptions = ({navigation,screenProps}) => ({
               header:(
                   //{ () => navigation.state.params.shouSuoOnPress(navigation) }
                  <SouSuoNav  quXiaoKuang = {() =>  navigation.state.params.quXiaoCPress(navigation)}
                              renterShouShuoPress = {() =>navigation.state.params.souSuoPress(navigation)}
                              callText={(text)=>navigation.state.params.call(text)}
                  />

               )

       });
    quXiaoCPress = (navigation) =>{
        const {goBack} = this.props.navigation;

        goBack();


    }
    souSuoPress = (navigation) => {

        navigation.navigate('SouSuoListVC',{
            title:'hahahaha',
            callback: (data)=>{
                console.log(data); // 打印值为：'回调参数'

            }
        });

    }

    render() {
        // console.log(this.props.navigation);
        //
        // const { dispatch,goBack,navigate,setParams,state } = this.props.navigation;


        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Test2!
                    {this.state.callText};
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu{'\n'}
                   sousuo
                </Text>
            </View>
        );
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
});