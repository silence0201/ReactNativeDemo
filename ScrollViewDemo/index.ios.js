/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, ScrollView, Image
} from 'react-native' ;



import {
    TimerMixin
} from 'react-timer-mixin' ;

let Dimensions = require('Dimensions');
let {height, width} = Dimensions.get('window');
// 导入JSON数据
let imageData = require('./ImageData.json') ;

class ScrollViewDemo extends Component {

    static defaultProps = {
        duration:1000
    }

    constructor(props) {
        super(props) ;
        this.state = {
            // 当前的页面
            currentPage:0
        } ;
    }

    mixins: [TimerMixin]

    render() {
        return (
            <View style={styles.container}>
                <ScrollView ref="scrollView"
                            horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            onScroll = {(e) => this.onAnimationEnd(e)}
                            onScrollBeginDrag = {() => this.onBeginDrag()}
                            onScrollEndDrag = {() => this.onEndDrag()}>
                    {this.renderAllImage()}
                </ScrollView>
                <View style={styles.pageView}>
                    {this.renderAllPageCircle()}
                </View>
            </View>
        ) ;
    }

    // 实现一些复杂的操作
    componentDidMount() {
        // 开启定时器
        this.startTimer() ;
    }

    // 开启定时器
    startTimer() {

        let that = this ;
        //添加定时器
        this.timer = setInterval(function () {
            // 拿到ScrollView
            let scrollView = that.refs.scrollView;
            // 设置原点
            let activePage = 0;
            // 判断当前页
            if(that.state.currentPage+1 >= imageData.data.length) {
                activePage = 0 ;
            }else{
                activePage = that.state.currentPage + 1 ;
            }
            // 更新状态机
            that.setState({
                currentPage:activePage
            }) ;

            // 滚动
            let offsetX = activePage * width ;
            scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true}) ;
        },this.props.duration) ;
    }

    onAnimationEnd(e) {
        // 求出水平方向偏移量
        let offsetX = e.nativeEvent.contentOffset.x;
        // 求出当前的页数
        let current = Math.floor(offsetX / width);
        // 更新状态机,重新绘制UI
        this.setState({
            currentPage:current
        }) ;
    }

    onBeginDrag() {
        // 停止定时器
        clearInterval(this.timer) ;
    }

    onEndDrag() {
        this.startTimer()
    }


    renderAllImage() {
        let allImage = [] ;
        // 拿到图像数组
        let imageArr = imageData.data ;
        // 遍历
        for (let i = 0 ; i<imageArr.length;i++) {
            // 取出单独的每个对象
            let imageItem = imageArr[i] ;

            // 创建组件,装入数组
            allImage.push(
                <Image key={i} source={{uri:imageItem.img}} style={{width: width,height:120}} />
            ) ;
        }
        return allImage ;
    }

    renderAllPageCircle() {
        let allPageCircle = [] ;
        let imageArr = imageData.data ;

        for (let i =0;i<imageArr.length;i++){
            let style = (i == this.state.currentPage) ? {color:'orange'} :{color:'white'} ;
            allPageCircle.push(
                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            ) ;
        }
        return allPageCircle ;
    }
}

export default class ScrollViewDemo1 extends Component {
  render() {
    return (
        <ScrollView horizontal={true}
                    pagingEnabled={true}
                    scrollEnabled={true}
        >
            {this.renderChildView()}
        </ScrollView>
    );
  }
  renderChildView() {
      let allChild = [] ;
      let colors = ['red','green','blue','yellow'] ;
      for (let i = 0;i<4;i++) {
          allChild.push(
              <View key={i} style={{backgroundColor: colors[i],width: 375,height: 200}}>
                  <Text>{i}</Text>
              </View>
          ) ;
      }
      return allChild ;
  }
}

const styles = StyleSheet.create({

    container: {
        marginTop:30
    },

    pageView: {
        width:width,
        height:25,
        backgroundColor:'rgba(0,0,0,0.2)',

        position:'absolute' ,
        bottom:0,

        flexDirection:'row',
        alignItems:'center'
    }

}) ;

AppRegistry.registerComponent('ScrollViewDemo', () => ScrollViewDemo);
