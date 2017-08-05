/**
 * Created by guohongan on 2017/8/4.
 */
import  React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from  'react-native'


export default class navigateview extends React.Component {

    static defaultProps = {
        bianjiBtn:React.PropTypes.object,
        searchButton: React.PropTypes.object,
        navtitle:React.PropTypes.string,
    }
    // <View
    //     style={{width:width,backgroundColor:'#ed6d00',height:64,flexDirection:'row',justifyContent:'space-between',}}>
    //     <TouchableOpacity activeOpacity={1} onPress={()=>navigation.state.params.shouSuoOnPress()}>
    //         <View style={styles.navigationBarStyle}>
    //             <Image style={styles.shouSuoImage} source={require('../images/search-icon@2x.png')}/>
    //             <Text>
    //                 {navigation.state.params ? navigation.state.params.title:'1111'}
    //             </Text>
    //         </View>
    //     </TouchableOpacity>
    //     <TouchableOpacity activeOpacity={0.8}>
    //         <Image style={styles.navigationBarImage} source={require('../images/icon_home_message_h.png')}/>
    //     </TouchableOpacity>
    // </View>
    render() {
        return (
            <View
                style={{width:SCREEN_WIDTH,backgroundColor:'#ed6d00',height:64,flexDirection:'row',justifyContent:'space-between',}}>
                <Text>
                    购物车
                </Text>

                <Text>
                    {this.props.bianjiBtn}
                </Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({


    navigationBarStyle:{
        marginLeft:10,
        // marginBottom: 5,
        height:34,
        width:SCREEN_WIDTH-10-10-10-30,
        backgroundColor:'#ededed',
        marginTop:24,
        borderRadius:4,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    navigationTitle:{
       fontSize:30/2,
        color:'#1c1b20',

    },
    shouSuoImage:{
        marginLeft:10,
        marginTop:3,
        width:20,
        height:20,
        resizeMode:Image.resizeMode.contain
    },
    shousuoText:{
        marginBottom:5,
        height:24,
        textAlign: 'center',
        color:'gray',
        fontSize:13,


    }
});
