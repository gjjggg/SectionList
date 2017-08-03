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
import linkAge from './linkage.json'
import  food_spu_tags from './linkagedddd.json'
import Config from  '../Tool/Config'
import NetWorking from '../Tool/NetWorking'
import CookieManager from 'react-native-cookies'
import CarFoodPuTong from  './CarFoodPuTong'
import CarHeaderPuTong from  './CarHeaderPuTong'
import CArCellPuTong from './CarCellPuTong'
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


        CookieManager.getAll((err, res) => {
            // console.log('cookies!');
            // console.log(err);
            // console.log(res);
        });
        NetWorking.get(url,(data)=>{
            var linkData = linkAge.data
            var goodListArr = linkData.goodsList;
            console.log('kkkkkk')
            goodListArr.forEach((value, index)=>{
                goodListArr[index]["flag"] = "NO"
                goodListArr[index].data.forEach((valueeee, indexxx)=>{
                    valueeee["flag"] = "NO"
                })
            })
            console.log(goodListArr)
            this.setState({

                allData:goodListArr
                // allData:food_spu_tags.food_spu_tags

            })
            console.log(this.state.allData)

        },(error)=>{
            var linkData = linkAge.data
            var goodListArr = linkData.goodsList;
            console.log('kkkkkk')
            goodListArr.forEach((value, index)=>{
                value["flag"] = "NO"
                goodListArr[index].data.forEach((valueeee, indexxx)=>{
                    valueeee["flag"] = "NO"
                })
            })
            console.log(goodListArr)
            this.setState({

                allData:goodListArr
               // allData:food_spu_tags.food_spu_tags

            })
            console.log(this.state.allData)


        });

    }
    componentDidMount() {
       this.fench()

     }

     _headerSelectedBtn =(section)=>{

         //console.log(section)
         // 2. 判断
         var tempallData = this.state.allData;
         tempallData.forEach((value, index)=>{
             if (section.section.seller_name === value.seller_name){

                 value["flag"] = "YES"
                 value.data.forEach((valueeee, indexxx)=>{
                     valueeee["flag"] = "YES"
                 })



             }else {


             }

         })
         this.setState({

             allData:tempallData

         });



     }
    _header =(section) =>{
       // console.log(section)


          return(
              // <View>
              //
              // </View>
             <CarHeaderPuTong style={SectionStyles.sectionHeaderStyle} goodsList={section} selectedHeader = {()=>this._headerSelectedBtn(section)}/>
          )
    }
    renderItem=(item)=>{
         // console.log(item)
        return(

           <CArCellPuTong style={SectionStyles.sectionCellStyle} />
        )
    }
    render() {
       console.log('sdshfsdjfhgsdhjghfdgs')

        return (
            this.state.allData?
               <View style={styles.container}>
                 <SectionList
                    style={styles.SectionStyle}
                     //滑动
                    stickySectionHeadersEnabled ={false}
                    renderSectionHeader={this._header}
                    renderItem = {this.renderItem}
                    keyExtractor={item => item.cartId}
                    //sections={[ { key: 's1',data:this.state.data}]}this.state.allData
                    sections={this.state.allData}

                 />
               <CarFoodPuTong style={styles.sectionViewStyle} />


             </View>
            :null

        );
    }
}
const SectionStyles = StyleSheet.create({
    sectionHeaderStyle:{
        width:SCREEN_WIDTH,
        height:(69+15)/2,
        backgroundColor:'#ffffff',

    },

    sectionCellStyle:{
        width:SCREEN_WIDTH,
        height:197/2,
        backgroundColor:'#ffffff',


    },



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