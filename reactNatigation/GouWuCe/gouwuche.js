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
    TouchableOpacity
} from 'react-native';
import Linkage from  './linkage.json'
import Config from  '../Tool/Config'
import NetWorking from '../Tool/NetWorking'
//import CookieManager from 'react-native-cookies'
export default class gouwuche extends Component {
    static  defaultProps ={
        data: [

            {
                "title": "品牌", 'id': '123',
                "itedm": [
                    {"thumb": "白色AHO-EFR-WDT-00208"},
                    {"thumb": "草绿AHO-EFR-WDT"},
                    {"thumb": "FR-WDT-00208"}
                ]

            },


            {
                "title": "颜色",
                'id': '3',
                "itedm": [
                    {"thumb": "共色是客户端"},
                    {"thumb": "是滴是滴就-EFR-WDT"},
                    {"thumb": "撒大家打肯德基0208"}
                ]
            }

        ]

    }
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        allData:[]



        };
      }
    fench(){
        let url = `${Config.api.baseRootUrl}cart/goodsList.json`
        CookieManager.setFromResponse('https://api-test.shunliandongli.com',
            'Domain=.api-test.shunliandongli.com; Path=/; Name=api_pin; Value = 11110',
            'Domain=.api-test.shunliandongli.com; Path=/; Name=api_wskey; Value = c18d7KxfSTtY%2Fe5v%2BLSzCodZ9KEh9qRY9bAPgy3sg5YZ4BI75MSjWl86j60JoVLLRsUSC5%2BgBxlAu2CcgFfc1LHYBR5Szlq8%2B7g%2FxJJKtPMMmSbAYxwJxFAd76gTBcVSJQJA6bEw5OEJBbcnjA', (res) => {
            // `res` will be true or false depending on success.
            console.log("Set cookie", res);
        })

        NetWorking.get(url,(data)=>{
            console.log(data)
            this.setState({
                allData:data
            })
        },(error)=>{
            console.log(error)

        });


    }
    componentDidMount() {
      //  this.fench()

     }

    _header=()=>{
          return(
              <View style={SectionStyles.sectionHeaderStyle}>

              </View>

          )
    }
    renderItem=({item})=>{
          console.log(item)
        return(
          <View style={SectionStyles.sectionCellStyle}>

          </View>
        )
    }
    render() {


        return (
           // <View style={styles.container}>
             this.state.data?   <SectionList
                    style={styles.SectionStyle}
                    renderItem = {this.renderItem}
                   // keyExtractor={item => item.id}
                    //sections={[ { key: 's1',data:this.state.dataSource[0].item}]}
                    sections={this.state.data}
                    renderSectionHeader={this._header}
                />:null
            //     <View style={styles.sectionViewStyle}>
            //     </View>
            //
            // </View>
        );
    }
}
const SectionStyles = StyleSheet.create({
    sectionCellStyle:{
        width:SCREEN_WIDTH,
        height:197/2,
        backgroundColor:'#5f6ee3',

    },
    sectionHeaderStyle:{
        width:SCREEN_WIDTH,
        height:197/2,
        backgroundColor:'#3de35a',

    }



})
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
    SectionStyle:{
        backgroundColor:'blue',
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT-98/2-64

    },
    sectionViewStyle:{
        width:SCREEN_WIDTH,
        height:98/2,
        marginTop:0,
        backgroundColor:'red',

    },
});