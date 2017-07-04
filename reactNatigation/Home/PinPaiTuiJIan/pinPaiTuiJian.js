/**
 * Created by guohongan on 2017/6/29.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,

} from 'react-native';

export default class paoTuiJian extends Component {
    static  defaultProps={
        roll_brand:React.PropTypes.object
     }

    rendermapXunHUan=(item,i)=> {
        return (
         <TouchableOpacity style={styles.TouchableOpacityStyle} key={i} activeOpacity={0.95}>
             <Image source={{uri:item.img}}    style={styles.ImageStyle}/>
         </TouchableOpacity>

        )
    }



    render() {

        const  {items} = this.props.roll_brand;
        console.log(items)
        return(
           <View style={styles.TuiJianStyleBig}>
               <View style={styles.pinPatTuiJianStyle}>
                   <Image  source={require('../../images/title_point_left@2x.png')}/>
                   <Text style={{marginLeft:10}}>
                       品牌推荐
                   </Text>
                   <Image source={require('../../images/title_point_right@2x.png')} style={{marginLeft:10}}/>
               </View>
               <ScrollView style={styles.scrollViewStyle}
                           horizontal={true}
                   //横向滚动条隐藏
                           showsHorizontalScrollIndicator={false}
                   //自动分页
                           pagingEnabled={true}
               >


                   {
                       items.map((item,i)=>this.rendermapXunHUan(item,i))
                   }
               </ScrollView>
           </View>

          );
    }
}

const styles = StyleSheet.create({
    TuiJianStyleBig:{
        flex:1,
        width:SCREEN_WIDTH,
        paddingTop:10,
        backgroundColor:'#f4f4f4'
    },
    pinPatTuiJianStyle:{
        width:SCREEN_WIDTH,
        height:SCREEN_WIDTH*0.10666,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'

    },
    tuiLeftImageStyle:{


    },
    scrollViewStyle:{
        flexDirection:'row',
        width:SCREEN_WIDTH,
        flex:1,
        backgroundColor:'white',

    },
    TouchableOpacityStyle:{
        width:0.285*SCREEN_WIDTH,
        height:0.16*SCREEN_WIDTH,
        backgroundColor:'white'

    },
    ImageStyle:{

        width:0.186*SCREEN_WIDTH,
        height:0.106*SCREEN_WIDTH,
        marginLeft:0.048*SCREEN_WIDTH,
        margin:0.0266*SCREEN_WIDTH,
        backgroundColor:'white'

    },
});