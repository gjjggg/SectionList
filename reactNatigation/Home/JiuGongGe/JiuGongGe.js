/**
 * Created by guohongan on 2017/6/26.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class me extends Component {

    static  propTypes ={
        cha_cate:React.PropTypes.object

    }
    renderrenderExpenseItem =(item,i)=>{
        const { items } = this.props.cha_cate;
        const itemsCount = items.length ;
        let style ;
        let Imagestyle;
        let textStyle;
        itemsCount === 3|| itemsCount === 6? null : style={ width:SCREEN_WIDTH*0.16,  marginLeft:(SCREEN_WIDTH-SCREEN_WIDTH*0.16*4)/5},
            Imagestyle={ width:SCREEN_WIDTH*0.16,  height:SCREEN_WIDTH*0.16, borderRadius:SCREEN_WIDTH*0.08,},textStyle={ width:SCREEN_WIDTH*0.16, }

        return(
            <View  style={[styles.lettleThreeView,style]} key={i}>
                <Image source={{uri: item.img}} style={[styles.imageStyle,Imagestyle]}/>

                <Text style={[styles.textStyle,textStyle]}  numberOfLines={1}>
                    {item.title}
                </Text>

            </View>
        )
    }

    render() {
        // console.log(this.props.cha_cate)
        const { items } = this.props.cha_cate;
        console.log(items);
        return (

            <View style={styles.container}>
                {  items.map((item,i)=>
                    this.renderrenderExpenseItem(item,i))
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'row',
        flexWrap:'wrap',
       //marginTop:18
        paddingBottom:10
    },
    lettleThreeView: {
        width:SCREEN_WIDTH*0.18666,
        backgroundColor:'white',
        marginLeft:(SCREEN_WIDTH-SCREEN_WIDTH*0.18666*3)/4,
        paddingTop:10,

    },
    imageStyle: {
        width:SCREEN_WIDTH*0.18666,
        height:SCREEN_WIDTH*0.18666,
        borderRadius:SCREEN_WIDTH*0.09333,
       // backgroundColor:"#3d4f4f"
    },
    textStyle:{
        width:SCREEN_WIDTH*0.18666,
        fontSize:12,
        //backgroundColor:"#0c0cef",
        paddingTop:5,
        textAlign:'center'

    }
});