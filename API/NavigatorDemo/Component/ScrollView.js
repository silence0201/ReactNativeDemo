/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, Image
} from 'react-native' ;

import {
    TimerMixin
} from 'react-timer-mixin' ;

let Dimensions = require('Dimensions');
let {height, width} = Dimensions.get('window');

export class ScrollImage extends Component {

    static defaultProps = {
        duration:1000,
        // 所有的Image对象数组
        imageDataArr: []
    };

    constructor(props) {
        super(props) ;
        this.state = {
            // 当前的页面
            currentPage:0,
            title: this.props.imageDataArr[0].title
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
                    {/*返回对应的标题*/}
                    <Text style={{color:'white'}}>{this.state.title}</Text>
                    {/*返回5个圆点*/}
                    <View style={{flexDirection:"row"}}>
                        {this.renderAllPageCircle()}
                    </View>
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
            if(that.state.currentPage+1 >= that.props.imageDataArr.length) {
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
            currentPage:current,
            // 标题
            title: this.props.imageDataArr[current].title
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
        let imageArr = this.props.imageDataArr ;
        // 遍历
        for (let i = 0 ; i<imageArr.length;i++) {
            // 取出单独的每个对象
            let imageItem = imageArr[i] ;

            // 创建组件,装入数组
            allImage.push(
                <Image key={i} source={{uri:imageItem.imgsrc}} style={{width: width,height:120}} />
            ) ;
        }
        return allImage ;
    }

    renderAllPageCircle() {
        let allPageCircle = [] ;
        let imageArr = this.props.imageDataArr ;

        for (let i =0;i<imageArr.length;i++){
            let style = (i == this.state.currentPage) ? {color:'orange'} :{color:'white'} ;
            allPageCircle.push(
                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            ) ;
        }
        return allPageCircle ;
    }
}

const styles = StyleSheet.create({

    container: {
    },

    pageView: {
        width:width,
        height:25,
        backgroundColor:'rgba(0,0,0,0.2)',

        position:'absolute' ,
        bottom:0,

        flexDirection:'row',
        alignItems:'center',
        // 设置主轴的对齐方式
        justifyContent:'space-between'
    }

}) ;

