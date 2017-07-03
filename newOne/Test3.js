/**
 * Created by guohongan on 2017/6/13.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
const btnMl = require('./../reactNatigation/images/btnM-l.png');
export default class Test3 extends Component {

    static navigationOptions = ({navigation,screenProps}) => ({
        headerTitle:'Test3',
        headerRight:(
            <Text onPress={()=>navigation.state.params.navigatePress()}>
                11111
            </Text>
        ),
        headerLeft:(
            <TouchableOpacity style={{flexDirection:'row'}}  onPress={()=>navigation.state.params.navigateLeftPress()}>
                <Image source={btnMl}
                       style={[{height:35,width:35 }]}/>
                <Text>x
                    返回
                </Text>
            </TouchableOpacity>
        ),
        header:(
            <View style={{width:320,backgroundColor:'red',height:64}}>

            </View>
        )
    });

    navigatePress = () => {

        console.log(this.props.navigation);

    }

    navigateLeftPress = ()=>{
        // alert('点击headerLeft');

        this.props.navigation.goBack();
    };

    componentDidMount(){

        this.props.navigation.setParams({
            title:'自定义Header',
            navigatePress:this.navigatePress,
            navigateLeftPress:this.navigateLeftPress,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Test3!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
});
