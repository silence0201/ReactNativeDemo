/**
 * Created by silence on 2017/4/18.
 */

import React, { Component } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity
} from 'react-native';

import {
    CommonView
} from './CommonView'

// 导入外部的json数据
let Home_D4 = require('../../LocalData/XMG_Home_D4.json');
export class MiddleBottomView extends Component {

    static defaultProps = {
        // 回调函数
        popTopHome: null
    }

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topView}>

                </View>
                {/*下部分*/}
                <View style={styles.bottomView}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    }

    // 下部分的所有子组件
    renderBottomItem(){
        // 组件数组
        let itemArr = [];
        // 拿到对应的数据
        let dataArr = Home_D4.data;
        // 遍历
        for(let i=0; i<dataArr.length; i++){
            // 取出单独的数据
            let itemData = dataArr[i];
            // 创建组件,装入数组
            itemArr.push(
                <CommonView
                    title={itemData.maintitle}
                    subTitle={itemData.deputytitle}
                    rightIcon={this.dealWithImgUrl(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    tplurl={itemData.tplurl}
                    key={i}
                    callBackClickCell={(data)=>this.popToTopView(data)}
                />
            );
        }

        // 返回组件数组
        return itemArr;
    }

    // 继续往父级界面传递数据
    popToTopView(data){
        // 继续执行回调函数
        this.props.popTopHome(data);
    }

    // 处理图像的尺寸
    dealWithImgUrl(url){
        if (url.search('w.h') === -1){ // 没有找到,正常返回
            return url;
        }else{
            return url.replace('w.h', '120.90');
        }
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:15
    },

    topView:{

    },

    bottomView:{
        // 设置主轴的方向
        flexDirection:'row',
        flexWrap:'wrap'
    }
});