/**
 * Created by guohongan on 2017/7/31.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class CarCellPuTong extends Component {
    static  defaultProps ={
        itemArr:React.PropTypes.object,
        selectedCell:React.PropTypes.object,

    }
    render() {
        console.log(this.props.itemArr)
        var  aa = this.props.itemArr.flag === 'YES' ?require('../images/img_shoppingcar_selected_h@2x.png'):require('../images/img_shoppingcar_selected_n@2x.png')
        return (
          <TouchableOpacity style={styles.container}>
              <TouchableOpacity  style={styles.selectBtn} onPress={this.props.selectedCell}>
                  <Image source={aa}  style={styles.selectimage} />
              </TouchableOpacity>
              <Image source={{uri:this.props.itemArr.thumb}} style={styles.cellImage}/>
              <View style={styles.viewRifght}>
                  <Text style={styles.titleTextStyle}  numberOfLines={2}>
                      {this.props.itemArr.title}
                  </Text>

                  <Text style={styles.guigeStyle}>
                      {this.props.itemArr.go_title}
                  </Text>

                  <Text style={styles.priceStyle}>
                      ￥{this.props.itemArr.go_marketprice}
                  </Text>

                  <View style={styles.jiajianStyle}>
                       <TouchableOpacity style={styles.leftjianBtn}>
                           <Image style={styles.leftjianImage} source={require('../images/bg_shoppingcar_jian@2x.png')} />
                       </TouchableOpacity>
                      <TextInput
                         value={1}
                         style={styles.textInputStyle}


                      />
                      <TouchableOpacity style={styles.rightjiaBtn}>
                          <Image style={styles.rightjiaImage} source={require('../images/bg_shoppingcar_jia@2x.png')} />
                      </TouchableOpacity>
                  </View>

              </View>

          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor: 'white',
        justifyContent:'flex-start',
        alignItems:'center',
        width:SCREEN_WIDTH,
        height:197/2,
    },
    selectBtn:{
       marginLeft:0,
       width:(35+22+22)/2,
       height:(35+22+22)/2,
        justifyContent:'center',
        alignItems:'center',
    },
    selectimage:{
        width:35/2,
        height:35/2,

    },
    cellImage:{
        marginLeft:0,
        marginTop:15/2,
        width:168/2,
        height:168/2,
        backgroundColor: 'red',
    },
    viewRifght:{
       marginTop:0,
       marginLeft:22/2,
       height:197/2,
        width:SCREEN_WIDTH-168/2-(35+22+22)/2-22/2,
       // backgroundColor:'#3f8f35'
    },
    titleTextStyle:{
        marginTop:26/2,
        marginLeft:0,
        marginRight:30/2,
        fontSize:24/2,
        color:'#1c1b20',

    },
    guigeStyle:{
    marginTop:10/2,
    marginLeft:0,
    fontSize:24/2,
    color:'#aaaaaa',

    },
    priceStyle:{
        marginLeft:0,
        marginBottom:22/2,
        fontSize:28/2,
        color:'#ff8202',
        position:'absolute',
        bottom:28/2
    },
    jiajianStyle:{
       position:'absolute',
       right:20/2,
       height:42/2,
       bottom:22/2,
       width:(50+44+50)/2,
        flexDirection:'row'
      // backgroundColor:'red'

    },
    leftjianBtn:{
        marginTop:0,
        marginLeft:0,
        width:50/2,
        height:42/2,

    },
    leftjianImage:{
        marginTop:0,
        marginLeft:0,
        width:50/2,
        height:42/2,

    },
    textInputStyle:{
        marginTop:0,
        marginLeft:0,
        width:44/2,
        height:42/2,
        backgroundColor:'#d67686'

    },
    rightjiaBtn:{
        marginTop:0,
        marginLeft:0,
        width:50/2,
        height:42/2,

    },
    rightjiaImage:{
        marginTop:0,
        marginLeft:0,
        width:50/2,
        height:42/2,

    },


})