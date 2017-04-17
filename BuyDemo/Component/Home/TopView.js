/**
 * Created by silence on 2017/4/16.
 */

import React, { Component } from 'react';
import {
    StyleSheet, View, Text, ScrollView
} from 'react-native';

import {
    TopListView
} from './TopListView'

let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

// 引入外部的json数据
let TopMenu = require('../../LocalData/TopMenu.json');

export class TopView extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            activePage: 0
        } ;
    }

    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {(e) => this.onScrollAnimationEnd(e)}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/*页码*/}
                <View style={styles.indicatorView}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }

    // 当一帧滚动结束的时候调用
    onScrollAnimationEnd(e){
        // 求出当前的页码
        let currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
        // 更新状态机
        this.setState({
            activePage: currentPage
        });

    }

    // scrollView内部的组件
    renderScrollItem(){
        // 组件数组
        let itemArr = [];
        // 颜色数组 ---> 数据数组
        let dataArr = TopMenu.data;
        // 遍历创建组件
        for(let i=0; i<dataArr.length; i++){
            itemArr.push(
                <TopListView key={i}
                             dataArr={dataArr[i]}
                />
            );
        }
        // 返回组件数组
        return itemArr;
    }

    // 页码(指示器)
    renderIndicator(){
        // 指示器数组
        let indicatorArr = [] ;
        let style ;
        // 遍历创建组件
        for(let i=0; i<2; i++){
            // 设置圆点的样式
            style = (i === this.state.activePage) ? {color:'orange'} :  {color:'gray'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25}, style]}>&bull;</Text>
            );
        }
        // 返回数组
        return indicatorArr;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },

    indicatorView: {
        // 改变主轴的方向
        flexDirection:'row',
        // 水平居中
        justifyContent:'center'
    }

});