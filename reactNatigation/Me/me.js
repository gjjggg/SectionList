/**
 * Created by guohongan on 2017/6/13.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    SectionList,
    Image,
    TouchableOpacity,
} from 'react-native';
import ShouCangCell from './ShouCangCell'
import DingdanCell from  './DingDanCell'
import TuBiaoCell from  './TuBiaoCell'
import ShouCangHeader from './ShouCangHeader'
import  NetWorking from '../Tool/NetWorking'
export default class me extends Component {

    static  defaultProps = {

        selectedHeader:React.PropTypes.object,


    }


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
           allDsouce:React.PropTypes.object
        };
      }
    componentDidMount() {

        // console.log(this.props.navigation);

        console.log('111111');

        // 不可变量 与let相对应
        // const {dispatch, goBack, navigate, setParams, state} = this.props.navigation;
        // this.props.navigation.setParams({
        //     zhexianJS:this.sheZhiBtnOpress
        // });

        var alldata=[]
        let url = `http://test.yizhizhun.com/api/market/kline?coinType=btc&unit=1min&size=180`;
        NetWorking.getttt(url,(data)=>{

           data.forEach((value, index)=> {
               let data = {};
               //let time = value.time
               let timeAmp = (time)=>{
                   let newDate = new Date();
                   let date = newDate.toTimeString();
                   return date.substring(0,5);
               };
              data.x = timeAmp(value.time);
               data.y = value.close;
               alldata.push(data)
               }
           )
            console.log(alldata)
            this.setState({

                allDsouce:alldata

            })

        },(error)=>{
            console.log(error);
        });


    }
//     sheZhiBtnOpress = (navigation) => {
//         // alert('点击headerLeft');
// //navigation.state.params.shouSuoOnPress(navigation)
//         navigation.navigate()
//         navigation.navigate('ZheXianJS',{
//
//         });
//
//     }
    _shoucang=()=>{
       // console.log('sdsfdsfdsf')
     this.props.navigation.navigate('ZheXianJS' ,{})

    }
    headerSectionList=()=>{
        return(
            <ShouCangHeader  shenzheBtn={this._shoucang}/>
        )
    }
    _renderShouCangItemCell=()=>{
        return(
            <ShouCangCell/>
        )
    }
    _renderDingDanItemCell=()=>{
        return(
            <DingdanCell/>
        )
    }
    _rendderTuBiaoItemCell=()=>{
        return(
          <TuBiaoCell />
        )
    }
    render() {
        return (
           <SectionList
               style={styles.container}
               contentContainerStyle={{ flexDirection: 'row',//设置横向布局
                   flexWrap: 'wrap',  }}
              ListHeaderComponent={this.headerSectionList}
            //  renderSectionHeader={this.headerSectionList}
               sections = {[
                   {key: 's1',  data: [{"titlebig":"商品收藏","numtitle":"3"},{"titlebig":"店铺收藏","numtitle":"0"}],renderItem:this._renderShouCangItemCell,  },
                   {key: 's2',data: [{"titlebig":"待付款","numtitle":"3"},{"titlebig":"代发货","numtitle":"6"},{"titlebig":"待收货","numtitle":"0"},{"titlebig":"待评价","numtitle":"6"},{"titlebig":"退款/售后","numtitle":"0"}],renderItem:this._renderDingDanItemCell},
                   {key: 's3',data: [{"titlebig":"待付款","numtitle":"3"},{"titlebig":"代发货","numtitle":"6"},{"titlebig":"待收货","numtitle":"0"},{"titlebig":"待评价","numtitle":"6"},{"titlebig":"退款/售后","numtitle":"0"},{"titlebig":"待付款","numtitle":"3"},{"titlebig":"代发货","numtitle":"6"},{"titlebig":"待收货","numtitle":"0"}],renderItem:this._rendderTuBiaoItemCell},
                   {key: 's4',data: [{"titlebig":"待付款","numtitle":"3"},{"titlebig":"代发货","numtitle":"6"},{"titlebig":"待收货","numtitle":"0"},{"titlebig":"待评价","numtitle":"6"},{"titlebig":"退款/售后","numtitle":"0"},{"titlebig":"待付款","numtitle":"3"},{"titlebig":"代发货","numtitle":"6"},{"titlebig":"待收货","numtitle":"0"},{"titlebig":"待付款","numtitle":"3"},{"titlebig":"代发货","numtitle":"6"}],renderItem:this._rendderTuBiaoItemCell}
               ]}


           />

        );
    }
}

const styles = StyleSheet.create({
    container: {
      //  flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT-98/2-64
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