/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    Image,
  Text,
  View
} from 'react-native';
import TabNavigator from  'react-native-tab-navigator';
import App from './App';

console.ignoredYellowBox = ['Remote debugger is in a background tab which',
];

export default class newOne extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:'home',
        };
      }

  render() {
    return (
        <App  />
        /**
      <View style={styles.container}>
          <TabNavigator>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'home'}
                  selectedTitleStyle =  {{color: 'red'}}
                  title="Home"
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/btnH-l.png')} />}
                  renderSelectedIcon={() => <Image style={styles.image}  source={require('./res/images/btnH-n.png')} />}
                  //badgeText="1"
                  onPress={() => this.setState({ selectedTab: 'home' })}>
                  <View style={styles.page1}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'profile'}
                  title="Profile"
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/btnD-l.png')} />}
                  renderSelectedIcon={() => <Image  style={styles.image} source={require('./res/images/btnD-n.png')} />}
                  //renderBadge={() => <CustomBadgeView />}
                  onPress={() => this.setState({ selectedTab: 'profile' })}>
                  <View style={styles.page2}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'qingqing'}
                  title="qingqing"
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/btnQ-l.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/btnQ-n.png')} />}
                  //renderBadge={() => <CustomBadgeView />}
                  onPress={() => this.setState({ selectedTab: 'qingqing' })}>
                  <View style={styles.page1}></View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'gengduo'}
                  title="gengduo"
                  renderIcon={() => <Image  style={styles.image} source={require('./res/images/btnM-l.png')} />}
                  renderSelectedIcon={() => <Image style={styles.image} source={require('./res/images/btnM-n.png')} />}
               //   renderBadge={() => <CustomBadgeView />}
                  onPress={() => this.setState({ selectedTab: 'gengduo' })}>
                  <View style={styles.page2}></View>
              </TabNavigator.Item>
          </TabNavigator>
      </View>
         */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },
    page1: {
     flex:1,
        backgroundColor:'red',
  },
    page2: {
        flex:1,
        backgroundColor:'yellow',
    },
    image:{
        height:22,
        width:22,

    }
});

AppRegistry.registerComponent('newOne', () => newOne);
