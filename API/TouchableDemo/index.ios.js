/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, TouchableOpacity, AlertIOS
} from 'react-native';

export default class TouchableDemo extends Component {

    constructor(props) {
        super(props) ;
        this.state = {text:'未处理'} ;
    }

    render() {
      return (
          <View style={styles.container}>
              <TouchableOpacity activeOpacity={0.5}
                                onPress={() => this.activeEvent('点击')}
                                onPressIn={() => this.activeEvent('按下')}
                                onPressOut={() => this.activeEvent('抬起')}
                                onLongPress={() => this.activeEvent('长按')}>
                  <View style={styles.innerView}>
                      <Text>我是文本,可以点击</Text>
                  </View>
              </TouchableOpacity>
              <View>
                  <Text>{this.state.text}</Text>
              </View>
          </View>
      );
  }
  activeEvent(text) {
        this.setState({
            text:text
        }) ;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    innerView: {
      backgroundColor:'red'
    } ,
});

AppRegistry.registerComponent('TouchableDemo', () => TouchableDemo);
