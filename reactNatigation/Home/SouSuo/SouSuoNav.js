/**
 * Created by guohongan on 2017/6/15.
 */
import  React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput

} from  'react-native'


export default class SouSuoNav  extends React.Component {

    static defaultProps = {
        quXiaoKuang:React.PropTypes.object,
        shangPinButton: React.PropTypes.object,
        shoushuoKuang:React.PropTypes.object,
        renterShouShuoPress:React.PropTypes.object,
        callText:React.PropTypes.object,
    }
    _onSubmitEditing = ()=> {
        console.log('haha');
        alert('aaaaa');
    };


    _onChangeText=(text)=>{
        // alert(text);

        if (this.props.callText){
            this.props.callText(text);
        }
    }

    render() {
        return (
            <View style={styles.sousuoNavBar}>
                <View style={styles.shutiaoNav} >

                     <View style={styles.leftbarView}>
                        <TouchableOpacity style={styles.touchOPenterStyle} onPress={this.props.shangPinButton}>
                            <Text style={styles.miaoshuTextFenlei}>
                                商品
                            </Text>
                            <Text style={styles.shutiaoStyle}>
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <TextInput  style={styles.textInPutStyle}
                                placeholder={'商品'}
                                removeClippedSubviews={true}
                                returnKeyType = 'search'
                                //onSubmitEditing={()=>this._onSubmitEditing()}
                                onChangeText={(text)=>this._onChangeText(text)}
                                onSubmitEditing = {this.props.renterShouShuoPress}
                    />
                        {/*onLayout={(event)=>{
                         console.log(event.nativeEvent.layout);
                         }}*/}
                    <TouchableOpacity style={styles.rightTapBtn} onPress={this.props.quXiaoKuang}>
                     <Text style={styles.rightTextBtn} >

                           取消
                     </Text>
                    </TouchableOpacity>


               </View>
            </View>
        )
    }


}
const styles = StyleSheet.create({

    sousuoNavBar:{
        width:SCREEN_WIDTH,
        height:64,
        backgroundColor:'#ededed',
        flexDirection:'row',
        overflow:'hidden',
    },
    shutiaoNav:{
        flexDirection:'row',
        width:SCREEN_WIDTH-20,
        height:34,
        marginTop:24,
        marginLeft:10,
        marginRight:10,
        //backgroundColor:'#ff7d40',
        alignItems: 'center',
        overflow:'hidden',

    },
    rightTapBtn:{
     width:40,
     //backgroundColor:'yellow',
     marginTop:0,
     position:'absolute',
     right:0,
     alignItems: 'center',
     flexDirection:'row',
    },

    rightTextBtn:{
       // backgroundColor:'#ffffff',
        width:40,
         //height:34,
        textAlign:'center',
        color:'#C0C0C0',
        marginTop:0,
        position:'absolute',
        right:0,
        fontSize:15,

    },

    leftbarView:{
        flexDirection:'row',
      //  backgroundColor:'red',
        height:34,
        marginTop:0,
        alignSelf:'center',
        alignItems: 'center',
        marginLeft:0,
        marginRight:0,
        // color:'#C0C0C0',


    },


    touchOPenterStyle:{
        alignItems: 'center',
        flexDirection:'row',
       // backgroundColor:'#ED9121',
        height:34,
        // zIndex:9999
    },
   miaoshuTextFenlei:{
       textAlign:'center',
       marginLeft:5,
       color:'#C0C0C0',
       fontSize:15,

   },
    shutiaoStyle:{
        width:1.5,
        backgroundColor:'#C0C0C0',
        marginTop:2,
        marginBottom:2,
        marginLeft:5,


    },

    textInPutStyle:{
        // backgroundColor:'#FFFF00',
        //backgroundColor:'#0000ff',
        paddingLeft:5,
        // marginRight:5,
        // marginTop:0,
        // marginBottom:0,
        // width:,
        width:SCREEN_WIDTH-90-30,
        // zIndex:1
        // position:'absolute',
        // left:0,
        // right:0,
        // top:0,
        // bottom:0,
        overflow:'hidden',

    },





});