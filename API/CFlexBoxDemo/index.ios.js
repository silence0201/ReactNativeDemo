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

// 第一个实例程序
export default class CFlexBoxDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={{backgroundColor:'red',height:30}}>第一个</Text>
          <Text style={{backgroundColor:'blue',height:40}}>第二个</Text>
          <Text style={{backgroundColor:'yellow',height:50}}>第三个</Text>
          <Text style={{backgroundColor:'green',height:60}}>第四个</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        // 改变主轴的方向
        flexDirection:'row',
        // 上边距
        marginTop:25,
        // 设置主轴对齐方式
        justifyContent:'space-around',
        // 设置侧轴的对象方式
        alignItems:'center'
    },
});


// 第二个实例程序
class CFlexBoxDemo2 extends Component {
    render() {
        return (
            <View style={styles2.container}>
                <Text style={{backgroundColor:'red',width:50}}>第一个</Text>
                <Text style={{backgroundColor:'blue',width:100}}>第二个</Text>
                <Text style={{backgroundColor:'yellow',width:150}}>第三个</Text>
                <Text style={{backgroundColor:'green',width:200}}>第四个</Text>
            </View>
        );
    }
}

const styles2 = StyleSheet.create({
  container: {
      backgroundColor:'#F5FCFF',
      // 改变主轴的方向
      flexDirection:'row',
      // 上边距
      marginTop:25,
      // 设置主轴对齐方式
      justifyContent:'flex-start',
      // 设置侧轴的对象方式
      alignItems:'center',
      // 显示不下,换行
      flexWrap:'wrap'
  },
});

// 第三个实例程序
class CFlexBoxDemo3 extends Component {
    render() {
        return (
            <View style={styles3.container}>
                <Text style={{backgroundColor:'red', flex:1,height:50,alignSelf:'flex-start'}}>第一个</Text>
                <Text style={{backgroundColor:'blue',flex:2,height:100,alignSelf:'flex-end'}}>第二个</Text>
                <Text style={{backgroundColor:'yellow',flex:2,height:150}}>第三个</Text>
                <Text style={{backgroundColor:'green',flex:1,height:200}}>第四个</Text>
            </View>
        );
    } ;
}

const styles3 = StyleSheet.create({
    container: {
        backgroundColor:'#F5FCFF',
        // 改变主轴的方向
        flexDirection:'row',
        // 上边距
        marginTop:25,
        // 设置主轴对齐方式
        justifyContent:'flex-start',
        // 设置侧轴的对象方式
        alignItems:'center',
        // 显示不下,换行
        flexWrap:'wrap'
    },
});

// 第四个实例程序
import Dimensions from 'Dimensions'

class CFlexBoxDemo4 extends Component {
    render() {
        return (
            <View style={styles4.container}>
                <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
                <Text>当前屏幕的宽度:{Dimensions.get('window').height}</Text>
                <Text>当前屏幕的分辨率:{Dimensions.get('window').scale}</Text>
            </View>
        );
    } ;
}

const styles4 = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#F5FCFF',
        alignItems:'center',
        justifyContent: 'center',
    },
});

AppRegistry.registerComponent('CFlexBoxDemo', () => CFlexBoxDemo4);
