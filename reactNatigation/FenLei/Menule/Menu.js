/**
 * Created by mac on 2017/7/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Animated,
    Image,
    TouchableOpacity
} from 'react-native';
// const margin = (SCREEN_WIDTH-SCREEN_WIDTH*0.16)/4
import Config from '../../Tool/Config'
import  NetWorking from '../../Tool/NetWorking'
export default class Fenlei extends Component {
    _leftflatList;
    _rightflatList;
    componentDidMount(){

        this.fetch()
    }
    constructor(props) {


        super(props);
        // 初始状态
        this.state = {

            leftIndexRow:0,
            dataSource:null
        }
    }

    fetch(){
        let url = `${Config.api.baseRootUrl}Category/all.json`
        NetWorking.get(url,(data)=>{
         this.setState({

             dataSource:data.categoryList
         })


        },(error)=>{

        })


    }

    _renderTableHeader = (rowData) =>{

        return(
            <View style={rightTableStyles.tableHeaderViewStyle}>
                <Text style={rightTableStyles.tableHeaderTitleStyle}>
                  查看{rowData.name}全部
                </Text>
                <Image style={rightTableStyles.tableHeaderImageStyle}
                       source={require('../../images/img_classification_jiantou@2x.png')}/>
             </View>

        )
    }
    renderSelectRow=(index)=>{
        console.log(index)


       // this._flatList.scrollToIndex({viewPosition:0,index:0})
      this._rightflatList.scrollToOffset({animated:true , offset:1});

        (this.state.dataSource.length-index)*(SCREEN_WIDTH*0.13333333+2)>SCREEN_HEIGHT-49-64?this._leftflatList.scrollToOffset({animated:true , offset:index*(SCREEN_WIDTH*0.13333333)}):null


        this.setState({
            leftIndexRow:index,
            dataSource:this.state.dataSource

        })
    }
    renderLeftItem = ({item,index}) => {
       console.log(this.state.leftIndexRow);

        return (
          <TouchableOpacity onPress={()=>this.renderSelectRow(index)} style={[leftTbaleStyles.itemAllBig,index == this.state.leftIndexRow?{backgroundColor:'white'}:{backgroundColor:'#f7f7f7'}]}>
              <View style ={[leftTbaleStyles.leftItemShu,index == this.state.leftIndexRow?{backgroundColor:'#ff8202'}:{backgroundColor:'#f7f7f7'}]} />

              <Text style={[leftTbaleStyles.rightItemText,index == this.state.leftIndexRow?{color:'#ff8202'}:{color:'#333333'}]}>
                  {item.name}
              </Text>

          </TouchableOpacity>

        )
    }
    renderRightItem = ({item}) => {
     // console.log(item);
        return (
            <View style={rightTableStyles.itemAllStyele}>
               <Image source={{uri:item.thumb}} style ={rightTableStyles.topImageStyle}/>
                <Text style={rightTableStyles.dottomTextStyle} numberOfLines={1}>
                    {item.name}
                </Text>

            </View>

        )
    }

    render(){

        return (
            this.state.dataSource ?
            <View  style={styles.container}>
                <FlatList
                    ref={(flatList)=>this._leftflatList = flatList}
                    style={styles.leftFlat}
                    data ={this.state.dataSource}
                    renderItem = {this.renderLeftItem}
                    keyExtractor={item=>item.categoryId}
                    extraData={this.state}
                />

                <FlatList
                    ref={(flatList)=>this._rightflatList = flatList}
                    contentContainerStyle={
                        {  flexDirection: 'row',//设置横向布局
                        flexWrap: 'wrap',  justifyContent:'flex-start',}} //设置换行显示
                    style={styles.rightFlat}
                    data ={this.state.dataSource[this.state.leftIndexRow].children}
                    ListHeaderComponent = {(item) => this._renderTableHeader(this.state.dataSource[this.state.leftIndexRow])}
                    renderItem = {this.renderRightItem}
                    keyExtractor={item=>item.categoryId}
                />

            </View>
           :null
        );
    }
}


const  rightTableStyles = StyleSheet.create({
   itemAllStyele:{
       backgroundColor:'white',
       marginTop:SCREEN_WIDTH*0.04,
       marginLeft:(SCREEN_WIDTH-SCREEN_WIDTH*0.26667-SCREEN_WIDTH*0.16*3)/4,
       width:SCREEN_WIDTH*0.16,
   },
    topImageStyle:{
        backgroundColor:'#ffffff',
       marginTop:5,
       marginLeft:5,
       width:SCREEN_WIDTH*0.16-10,
       height:SCREEN_WIDTH*0.16-10,

    },
   dottomTextStyle:{
        textAlign:'center',
       fontSize:13,
        color:'#1c1b20',
        marginTop:5

   },
    tableHeaderViewStyle:{
        marginLeft:10,
        marginTop:12,
        width:SCREEN_WIDTH-SCREEN_WIDTH*0.26667-20,
        height:75/2,
        backgroundColor:'#f5eae4',
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },


    tableHeaderTitleStyle:{
        fontSize:13,
        fontWeight: 'bold',
        color:'#8b4701',


    },
    tableHeaderImageStyle:{
        resizeMode:Image.resizeMode.contain,
        marginLeft:10,
        width:10,
        height:8,

    },


})
const leftTbaleStyles =StyleSheet.create({
    itemAllBig:{
        flexDirection:'row',
        width:SCREEN_WIDTH*0.26667,
        height:SCREEN_WIDTH*0.13333333-2,
        justifyContent:'flex-start',
        backgroundColor:'#f7f7f7',
        marginBottom:2,
        alignItems:'center'

    },
    leftItemShu:{
        backgroundColor:'#ff8202',
        marginLeft:0,
        width:SCREEN_WIDTH*0.008,
        height:SCREEN_WIDTH*0.13333333-2,
        marginTop:0,

    },
    rightItemText:{


        marginLeft:0,
        width:SCREEN_WIDTH*0.26667-SCREEN_WIDTH*0.008,
        textAlign:'center',

    },



})
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
       flexDirection:'row',

    },
   leftFlat:{
      backgroundColor:'white',
       width:SCREEN_WIDTH*0.26667,
       //height:SCREEN_HEIGHT,



   },
    rightFlat:{
        width:SCREEN_WIDTH-SCREEN_WIDTH*0.26667,
        //height:SCREEN_HEIGHT,
       backgroundColor:'white',
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