/**
 * Created by silence on 2017/4/17.
 */

import React, { Component } from 'react';
import {
    StyleSheet, View, Text,TouchableOpacity,Image
} from 'react-native';

import {
    CommonView
} from './CommonView'

let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');
// 引入外部数据
let TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');

export class HomeMiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    }

    // 左边的View
    renderLeftView(){
        // 拿到对应的数据
        let data = TopMiddleData.dataLeft[0];

        return(
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.leftView}>
                    <Image source={{uri:data.img1}} style={styles.leftImage}/>
                    <Image source={{uri:data.img2}} style={styles.leftImage} />
                    <Text style={{color:'gray'}}>{data.title}</Text>
                    <View style={{flexDirection:'row', marginTop:5}}>
                        <Text style={{color: 'blue', marginRight:5}}>{data.price}</Text>
                        <Text style={{color: 'orange', backgroundColor:'yellow'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    // 右边的View
    renderRightView(){
        // 组件数组
        let itemArr = [];
        // 取出具体的数据
        let rightData = TopMiddleData.dataRight;
        // 遍历
        for(let i=0; i<rightData.length; i++){
            // 取出单独的数据
            let data = rightData[i];

            itemArr.push(
                <CommonView
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIcon={data.rightImage}
                    titleColor={data.titleColor}
                    key={i}
                />
            );
        }
        // 返回组件数组
        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        // 改变主轴的方向
        flexDirection:'row'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    leftView:{
        width:width * 0.5,
        height:119,
        backgroundColor:'white',
        marginRight:1,

        // 水平居中
        alignItems:'center',
        justifyContent:'center'
    },

    leftImage:{
        width:120,
        height:30,

        // 内容模式
        resizeMode:'contain'
    }
});