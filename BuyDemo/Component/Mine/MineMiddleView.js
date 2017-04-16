/**
 * Created by silence on 2017/4/16.
 */

import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity
} from 'react-native';

class InnerView extends Component {
    static defaultProps = {
        iconName: '',
        title:''
    } ;

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('0')}}>
                <View style={styles.innerView}>
                    <Image source={{uri: this.props.iconName}} style={{width:40, height:30, marginBottom:3}}/>
                    <Text style={{color:'gray'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        ) ;
    }
}

let middleData = require('./MiddleData.json') ;
export class MineMiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    }

    renderAllItem() {
        // 定义组件数组
        let itemArr = [];
        // 遍历
        for(let i=0; i<middleData.length; i++){
            // 取出单独的数据
            let data = middleData[i];
            // 创建组件装入数组
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} title={data.title} />
            );
        }
        // 返回
        return itemArr;
    }
}

const styles = StyleSheet.create({
    innerView: {
        width:70,
        height:70,

        // 水平和垂直居中
        justifyContent:'center',
        alignItems:'center'
    },
    container: {
        // 设置主轴的方向
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: 'white',
        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },
});