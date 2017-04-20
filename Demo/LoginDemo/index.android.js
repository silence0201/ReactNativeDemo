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

// 引入外部文件
import  {
    LoginView
} from './LoginView'

export default class LoginDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
          <LoginView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('LoginDemo', () => LoginDemo);
