/**
 * Created by guohongan on 2017/6/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    SectionList,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Config  from  '../Tool/Config'
import NetWorking from '../Tool/NetWorking'
import Swiper from 'react-native-swiper'
import JiuGongGe from './JiuGongGe/JiuGongGe'
import PinPaiii  from  './PinPaiTuiJIan/pinPaiTuiJian'
import TuiJianPinTuan from './TuiJianPinTuan/TuiJianPinTuan'
import XianShiMiaoSha from  './XinShiMiaoSha/XianShiMiaoSha'
export default class tuijian extends Component {
    static  defaultProps = {
        dchannel_id:React.PropTypes.string,
    }

    componentDidMount() {
        console.log(this.props.dchannel_id)

        this.fetch();
        this.setTimeout = setTimeout(()=>{
            this.setState({swiperShow:true});
        },100)

    }

    componentWillUnmount(){
        this.setTimeout && clearTimeout(this.setTimeout);
    }


    // 构造
    constructor(props) {


        super(props);
        // 初始状态
        this.state = {

            dataSource:[
                [
                    {"title":"品牌",'id':'123',
                        item:[
                            {"thumb":"白色AHO-EFR-WDT-00208"},
                            {"thumb":"草绿AHO-EFR-WDT"},
                            {"thumb":"FR-WDT-00208"}]
                    },
                ],[
                    {"title":"颜色",
                        item:[
                            {"thumb":"共色是客户端"},
                            {"thumb":"是滴是滴就-EFR-WDT"},
                            {"thumb":"撒大家打肯德基0208"}
                        ]
                    }
                ]
            ],
            allChildArr:[],
            roll_pic:null,
            roll_goods:null,
            roll_brand:null,
            order_list:null,
            display_list:null,
            cha_cate:null,
            act_ad:null,
            swiperShow:false,

        };
    }

    fetch(){
        let url = `${Config.api.baseRootUrl}Channel/content.json?channel_id=${this.props.dchannel_id}`;
        // console.log(this.props.dchannel_id)
        NetWorking.get(url,(data)=>{
            console.log(data)

            let roll_goods,roll_pic,roll_brand,order_list,cha_cate,display_list,act_ad;
            data.map((item,i)=> {

                console.log(item.module);
                if (item.module === 'roll_pic'){
                    // this.setState({
                    //     roll_goods: item,
                    //
                    // })
                    item.items.length==0? null:
                    roll_pic=item
                }
                if (item.module === 'cha_cate'){
                    // this.setState({
                    //     roll_pic: item,
                    //
                    // })
                    item.items.length==0? null: cha_cate = item;
                }
                if (item.module === 'roll_goods'){
                    // this.setState({
                    //     roll_goods: item,
                    //
                    // })
                    item.items.length==0? null:
                    roll_goods=item
                }
                if (item.module === 'roll_tuan'){
                    // this.setState({
                    //     roll_goods: item,
                    //
                    // })
                    item.items.length==0? null:
                    roll_goods=item
                }
                if (item.module === 'display_list'){
                    // this.setState({
                    //     roll_goods: item,
                    //
                    // })
                    item.items.length==0? null:
                    display_list=item
                }

                if (item.module === 'roll_brand'){
                    item.items.length==0? null:
                    roll_brand = item;
                }
                if (item.module === 'act_ad'){
                    item.items.length==0? null:
                    act_ad = item;
                }
                if (item.module === 'order_list'){


                    item.items.length==0? null:
                    order_list = item;
                }
            })

            this.setState({
                roll_goods:roll_goods,
                roll_pic:roll_pic,
                roll_brand:roll_brand,
                order_list:order_list,
                cha_cate:cha_cate,
                act_ad:act_ad,
                display_list:display_list,

            })

        },(error)=>{
            console.log(error);
        });
    }
    _fetchMoreData= () =>{


    }

    renderItem = ({item}) => {
        // console.log(item);
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

    renderSwiper(){
        console.log(this.state.swiperShow);
        if(this.state.swiperShow){
            return (
                <Swiper style={tableHeader.swiperStyle}
                        autoplay ={true}
                        height = {SCREEN_WIDTH * 0.333}
                        dotColor ="white"
                        activeDotColor = "#ed6d00"
                        autoplayTimeout={1}
                        paginationStyle  = {{position: 'absolute', bottom: 5,}}
                >

                    {this.state.roll_pic.items.map((item, i) => {

                        return <Image key={i} source={{uri: item.img}}
                                      style={{width: SCREEN_WIDTH, height: SCREEN_WIDTH * 0.333, marginLeft: 0}}/>

                    })}

                </Swiper>
            );
        }else {
            return <View style={{height:SCREEN_WIDTH * 0.333,backgroundColor:'white'}}/>;
        }
    }

    _renderTableHeader =()=>{
        return(
            this.state.order_list ?

                <View style={{backgroundColor:'#ffffff'}}>
                    {
                   this.state.roll_pic ?

                         this.renderSwiper()



                            :null
                    }
                    {
                        this.state.act_ad?
                        <TouchableOpacity style={{ marginTop:10}}   activeOpacity={0.8} onPress={this.props.searchButton}>

                            <Image style={tableHeader.bannerBottom} source={require('../images/icon_home_message_h.png')} />
                        </TouchableOpacity>
                            :null
                    }
                    {
                        this.state.roll_pic?
                        <JiuGongGe cha_cate ={this.state.cha_cate}/>
                         :null
                    }
                    {
                        this.state.roll_goods?
                        <TuiJianPinTuan  roll_goods ={this.state.roll_goods}/>
                            :null
                    }
                    {
                        this.state.display_list?
                        <XianShiMiaoSha display_list={this.state.display_list} />
                            :null
                    }



                    <PinPaiii roll_brand={this.state.roll_brand}/>
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

    _footer = () => {
        return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是尾部</Text>;
    }
    render() {
        console.log('render');

        return (

            // <View style={styles.container}>
            //     <FlatList
            //         ref={(flatList)=>this._flatList = flatList}
            //         style={{backgroundColor:'#f5f5f5',flex: 1,}}
            //         data ={this.state.dataSource}
            //         initialNumToRender={6}
            //         renderItem={({item})=>this.renderItem(item)}
            //         numColumns ={2}
            //         horizontal={false}
            //         ListHeaderComponent={this._header}
            //         ListFooterComponent={this._footer}
            //         sections={2}
            //        // columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}
            //
            //     />
            // </View>
            this.state.order_list?
                <SectionList

                    contentContainerStyle={{  flexDirection: 'row',//设置横向布局
        flexWrap: 'wrap',  justifyContent:'space-between',}} //设置换行显示
                    ListHeaderComponent = {() => this._renderTableHeader()}
                    renderSectionHeader={this._header}
                    renderItem = {this.renderItem}
                    //滑动
                    stickySectionHeadersEnabled ={false}
                    keyExtractor={item => item.itemId}
                    sections={
                           [{key:'s1',data:this.state.order_list.items}]
                       }
                    onEndReached={() => this._fetchMoreData()}
                    onEndReachedThreshold={1}
                    removeClippedSubviews={ false }
                    ListFooterComponent={()=>{
                        return( !this.isRefresh &&
                            <ActivityIndicator
                                style={styles.loadDataStyle}
                            />
                        )
                    }}
                />
                :
                null
            // </View>




        )
    }
}

const tableHeader = StyleSheet.create({
    swiperStyle:{

      //  backgroundColor:'#ed6d00'



    },
    slide1: {
        flex: 1,
        // justifyContent: 'center',
        // flexDirection: 'row',//设置横向布局
        // flexWrap: 'wrap',  //设置换行显示
        // backgroundColor: 'red',
        width:SCREEN_WIDTH,
        height:SCREEN_WIDTH*0.333,

    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    bannerBottom:{
        width:SCREEN_WIDTH,
        height:SCREEN_WIDTH*0.2666,

    }


})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection:'row',

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
    tuiLeftImageStyle:{


    },
    loadDataStyle:{
        marginVertical:20,
        marginTop:20
    },
});