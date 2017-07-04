/**
 * Created by guohongan on 2017/6/27.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export default class  tuiPin extends Component {
    static  defaultProps = {
        roll_goods:React.PropTypes.object
    }



    pinTuan=()=>{
        return(
            <View>
            </View>
        )
    }
    renderChildView =(item,i)=>{
       let stylee;
        module === 'roll_tuan' ? stylee={width:0.28*SCREEN_WIDTH,height:0.157333*SCREEN_WIDTH}:null
        console.log(module)
     return (
         <TouchableOpacity style={styles.TouchableViewStyle} key={i} activeOpacity={0.95} onPress={this.pinTuan}>
              <Image source={{uri: item.thumb}} style={[styles.scrollViewStyel,stylee]}/>
             <Text style={styles.titleShuoTitlle} numberOfLines={2}>
                 {item.title}
             </Text>
             <View style={styles.priceStyle}>
             <Text style={styles.xianjiaPrict}>
                  ¥39.9
             </Text>
             <Text style={styles.oldPrice} >
                  ¥39.9
             </Text>
             </View>
         </TouchableOpacity>
     )

    }

    render() {
        console.log(this.props.roll_goods)
        const {items} = this.props.roll_goods;
        let module = this.props.roll_goods.title
         // let rollItemsCount = items.length;
        console.log(module)
         return(
            <View style={styles.container}>
                <View style={styles.huore}>
                     <Image  source={require('../../images/img_home_title_icon@2x.png')} style={styles.titleLeftImage}/>
                    <Text style={styles.titleBigText}>
                        {module}
                    </Text>
                    <TouchableOpacity style={styles.TouchStyle}>
                     <Text style={styles.rightTextTitle}>
                        查看更多
                     </Text>
                     <Image source={require('../../images/img_home_pintuan_more@2x.png')} style={styles.rightImage}/>
                   </TouchableOpacity>
                </View>
               <ScrollView
                   //横向滑动
                   horizontal={true}
                   //横向滚动条隐藏
                   showsHorizontalScrollIndicator={false}
                   //自动分页
                   pagingEnabled={true}
                   style={styles.scrollViewStyle}

               >
                   {
                       items.map((item,i)=>this.renderChildView(item,i))
                   }
               </ScrollView>

            </View>

         );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        paddingTop:10,
        // paddingBottom:10

    },
    huore:{
      width:SCREEN_WIDTH,
      height:40,
      flexDirection:'row',
      backgroundColor:'#ffffff',
      alignItems:'center'

    },
    TouchStyle:{
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        top:0,
        height:40,
        right:0
    },
    titleLeftImage:{
       marginLeft:10,
       width:20,
       height:20,
    },
    titleBigText:{
        marginLeft:10,
        color:'#ff5b41',
        fontSize:15

    },
    rightImage:{

      position:'absolute',
      right:10,
      width:20,
      height:20,

    },
    rightTextTitle:{
      position:'absolute',
      right:35,
        fontSize:12,
        color:'#858585'


    },
    scrollViewStyle:{
        flex: 1,
        backgroundColor: 'white',
        flexDirection:'row',
    },
    TouchableViewStyle:{

        paddingLeft:10,
        backgroundColor:'white',
        width:SCREEN_WIDTH*0.28+10,
    },
    scrollViewStyel:{
        width:SCREEN_WIDTH*0.28,
        height:SCREEN_WIDTH*0.28,

    },
    titleShuoTitlle:{
        width:SCREEN_WIDTH*0.28,
       // backgroundColor:'#efdf3d',
        paddingTop:4,
        height:40

    },
    priceStyle:{
        flexDirection:'row',
        width:SCREEN_WIDTH*0.28,
        justifyContent:'space-between',
        paddingTop:3,
        paddingBottom:7

    },
    xianjiaPrict:{
        marginLeft:2,
        color: '#ff8202',
    },
    oldPrice:{
        marginRight:2,
        color: '#858585',
        textDecorationLine:'line-through'
    },


});