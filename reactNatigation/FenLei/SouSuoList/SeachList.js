import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class seachList extends Component {
    render() {
        const { dispatch,goBack,navigate,setParams,state } = this.props.navigation;
        alert(state.params.title);

        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={()=>{

                    state.params.callback('dahaoren');

                    goBack();
                }}>
                    Welcome to Test2!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu{'\n'}
                    搜索二级
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