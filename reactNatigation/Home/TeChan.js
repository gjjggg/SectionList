/**
 * Created by guohongan on 2017/6/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    SectionList,
    TouchableOpacity,
    Image
} from 'react-native';
import Config  from  '../Tool/Config'
import Swiper from 'react-native-swiper'
import NetWorking from '../Tool/NetWorking'


export default class techan extends Component {
    static defaultProps = {
        dchannel_id:React.PropTypes.string
    }
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            roll_pic:null,
            order_list:null,
            specialty:null,

        };
      }

    componentDidMount() {
        let url = `${Config.api.baseRootUrl}Channel/content.json?channel_id=${this.props.dchannel_id}`;
        NetWorking.get(url,(data)=>{

            let roll_pic,order_list,specialty
            data.map((item,i)=>{
                if(item.module === 'roll_pic'){
                    item.items.length==0 ?null:
                        roll_pic=item

                }
                if(item.module === 'order_list'){

                    item.items.length === 0?null:
                        order_list=item
                }
                if (item.module === 'specialty'){
                    item.items.length === 0?null:
                    specialty =item
                }

            })
            this.setState({
                roll_pic:roll_pic,
                order_list:order_list,
                specialty:specialty
            })

        })
    }
    _rendernheader=()=>{

          return(
           this.state.order_list?
              <View>
                  {
                      this.state.roll_pic ?
                          <Swiper autoplay ={true}
                                  height = {SCREEN_WIDTH*0.333}
                                  dotColor ="white"
                                  activeDotColor = "#ed6d00"
                                  autoplayTimeout={1}
                                  paginationStyle  = {[{ position:'absolute',bottom:5,},{bottom:10}]}
                          >
                              {
                                  this.state.roll_pic.items.map((item,i)=>{
                                      return <Image source={{uri:item.img}} style={{width:SCREEN_WIDTH,height:SCREEN_WIDTH*0.333,marginLeft:0}} key={i}/>
                                  })
                              }
                          </Swiper>
                          :null
                  }

                  {
                      this.state.specialty?
                          <View style={{backgroundColor:'white',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',width:SCREEN_WIDTH,paddingTop:10}}>
                              {
                                  this.state.specialty.items.map((item,i)=>{
                                      return (

                                          <TouchableOpacity style={{width:SCREEN_WIDTH/2-5,paddingBottom:10}} key={i}>
                                              <Image source={{uri:item.img}} style={{width:SCREEN_WIDTH/2-5,height:SCREEN_WIDTH*0.2733}}/>
                                          </TouchableOpacity>
                                      )
                                  })
                              }
                          </View>
                          :null

                  }

               </View>
           :null

          )
    }
    _header = () => {
        return (
            <View style={styles.TuiJianStyleBig}>
                <View style={styles.pinPatTuiJianStyle}>

                    <Image  source={require('../images/title_point_r_left@2x.png')}/>

                    <Text style={{marginLeft:10}}>
                        精选推荐
                    </Text>
                    <Image source={require('../images/title_point_r_right@2x.png')} style={{marginLeft:10}}/>

                </View>
            </View>
        )

    }

    renderItem = ({item}) => {
        console.log(item);
        return(
            <TouchableOpacity style={[styles.list]} >
                <Image  source={{uri:item.thumb}}  style={styles.row}  />
                <View style={styles.textViewTitleStyle}>
                    <Text style={styles.textTitleStyle} numberOfLines={2}>
                        {item.title}
                    </Text>
                </View>
                <View style={styles.priceViewStyle}>
                    <Text style={styles.priceTextStle}>
                        ¥{item.marketprice}
                    </Text>
                    <Text style={styles.pricetextKuangstyle} numberOfLines={1}>
                        包邮
                    </Text>
                </View>
            </TouchableOpacity>

        )
    }
    render() {
        console.log(this.state.order_list)
        return (
          this.state.order_list ?
              <SectionList style={{backgroundColor:'#ffffff'}}
                  // 表头滑动
                           contentContainerStyle={{  flexDirection: 'row',//设置横向布局
        flexWrap: 'wrap',  justifyContent:'space-between', //设置换行显示

      }}
                           pageSize={2}  // 配置pageSize确认网格数量
                           stickySectionHeadersEnabled = {false}
                           ListHeaderComponent={()=>this._rendernheader()}
                           renderSectionHeader={this._header}
                           renderItem={this.renderItem}
                           keyExtractor={item => item.title}
                           sections={
                             [{key:'s1',data:this.state.order_list.items}]
                         }
              />



             :null

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
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
    swiperStyle:{



    },
    TuiJianStyleBig:{

        flex:1,
        width:SCREEN_WIDTH,
        backgroundColor:'#ededed',
        paddingTop:10
    },
    pinPatTuiJianStyle:{
        width:SCREEN_WIDTH,
        height:SCREEN_WIDTH*0.10666,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'#ffffff',

    },
    list: {

        flexDirection: 'row',//设置横向布局
        flexWrap: 'wrap',  //设置换行显示
        alignItems: 'flex-start',
        justifyContent:'space-between',
        width: SCREEN_WIDTH / 2-5,
        paddingBottom:3
    },

    textViewTitleStyle:{

        height:35


    },
    textKuangStyle:{
        backgroundColor:'#ff5b41',
        padding:3,
        borderRadius:5,


    },
    textTitleStyle:{
        fontSize:13,
        padding:3

    },
    priceViewStyle:{
        flexDirection:'row',

    },
    priceTextStle:{
        fontSize:15,
        padding:3,
        color:'#ff8202'

    },
    pricetextKuangstyle:{
        backgroundColor:'#ff8202',
        color:'white',
        marginLeft:5,
        padding:2,
        borderRadius:5,
        fontSize:13,
        height:17,
        marginTop:4


    },
    row: {
        backgroundColor: '#F5FCFF',
        width: SCREEN_WIDTH / 2-5,
        height: SCREEN_WIDTH / 2-5,

        marginLeft:0
    },

});