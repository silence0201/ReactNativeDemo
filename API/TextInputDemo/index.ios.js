/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, TextInput
} from 'react-native';

export default class TextInputDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput  style={styles.input}
                    // value='我是默认文字'
                    keyboardType={'number-pad'}
                    // 多行显示
                    // multiline={true}
                    // 是否是密码,不适用多行
                    password={true}
                    placeholder="我是占位文字"
                    clearButtonMode="while-editing"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
      marginTop:30
  },
  input: {
      width:300,
      height:30,
      // backgroundColor:'#cccccc',
      borderWidth:1,
      borderBottomColor:'#e8e8e8'
  }
});

AppRegistry.registerComponent('TextInputDemo', () => TextInputDemo);
