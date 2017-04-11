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
import Dimensions from 'Dimensions'

export default class CFlexBoxDemo extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
          <Text>当前屏幕的宽度:{Dimensions.get('window').height}</Text>
          <Text>当前屏幕的分辨率:{Dimensions.get('window').scale}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#F5FCFF',
        alignItems:'center',
        justifyContent: 'center',
    },
});

AppRegistry.registerComponent('CFlexBoxDemo', () => CFlexBoxDemo);
