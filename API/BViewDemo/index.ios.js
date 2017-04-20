/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BViewDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.innerView}>
              <Text>我是第一个View</Text>
          </View>

          <View style={styles.innerView2}>
              <Text>我是第二个View</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'red',
        width:300,
        height:100,
        // 改变主轴的方向 >> 默认是竖向
        flexDirection:'row',
    },
    innerView: {
        width:100,
        backgroundColor:'green',
    },
    innerView2: {
        backgroundColor:'yellow',
        width:100
    }

});

AppRegistry.registerComponent('BViewDemo', () => BViewDemo);
