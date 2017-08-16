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
        console.log(this.props.bianjiBtn)
        return (
            <View
                style={styles.navigationBarStyle}
                >
                <Text style={styles.navigationTitle}>
                    购物车
                </Text>

                <Text style={styles.shousuoText} onPress={this.props.searchButton}>
                    {this.props.bianjiBtn}
                </Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({


    navigationBarStyle:{
        height:64,
        // marginBottom: 5,
        width:SCREEN_WIDTH,
        backgroundColor:'#ededed',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    navigationTitle:{
       fontSize:30/2,
       color:'#1c1b20',
       marginTop: 15

    },

    shousuoText:{
        fontSize:28/2,
        color:'#1c1b20',
        marginTop: 14,
        marginLeft:16,
        position:'absolute',
        right:15,
        top:14
        // marginBottom:5,
        // height:24,
        // textAlign: 'center',
        // color:'gray',
        // fontSize:13,


    }
});
