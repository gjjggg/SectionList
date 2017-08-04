/**
 * Created by guohongan on 2017/8/3.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class carFoodJieSuan extends Component {

    static  defaultProps = {

       // selectedHeader:React.PropTypes.object,

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.xianView}/>
                <TouchableOpacity style={styles.quanXuanBtn} onPress={this.props.selectedFooderDelect}>
                    <Image  source={aa} style={styles.quanXuanImage}/>
                    <Text style={styles.quanXuanText}>
                        全选
                    </Text>
                </TouchableOpacity>


                <Text style={styles.shangchuText}>
                        删除
                </Text>


                <TouchableOpacity style={styles.shoucangBtn} >
                    <Text style={styles.shoucangText}>
                        去结算
                    </Text>
                </TouchableOpacity>

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