/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View,Image
} from 'react-native';
import Dimensions from 'Dimensions' ;

// 导入json数据
var badgeData = require('./BadgeData.json') ;
var {width,height} = Dimensions.get('window') ;


// 定义一些全局的变量
var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;

export default class ImageDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
          {this.renderAllBadge()}
      </View>
    );
  }

  // 返回所有的包
  renderAllBadge() {
      // 返回一个数组,装所有的子组件
      let allBadge = [] ;
      for (let i=0;i<badgeData.data.length;i++) {
          let badge = badgeData.data[i] ;
          // 直接装入数组
          allBadge.push(
              <View style={styles.outView} key={i}>
                  <Image source={{uri: badge.icon}} style={styles.image}/>
                  <Text style={styles.title}>{badge.title}</Text>
              </View>
          ) ;
      }
      return allBadge ;
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop:25,
        // 确定主轴的方向
        flexDirection:'row',
        flexWrap:'wrap',

    },
    outView: {
        backgroundColor:'#dddddd',
        // 设置侧轴对其方式
        alignItems:'center',
        width:boxW,
        height:boxW,
        marginLeft:vMargin,
        marginTop:hMargin
    },
    image: {
        width:80,
        height:80
    },
    title: {

    },
});

AppRegistry.registerComponent('ImageDemo', () => ImageDemo);
