/**
 * Created by silence on 2017/4/16.
 */

import React, { Component } from 'react';
import {
    StyleSheet, View, Text, TouchableOpacity, Image, Platform
} from 'react-native';

export class MyCell extends Component {

    static defaultProps = {
        leftIconName: '',
        leftTitle: '',
        rightIconName: '',
        rightTitle: ''
    } ;

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View style={styles.leftView}>
                        <Image source={{uri:this.props.leftIconName}}  style={styles.leftImg}/>
                        <Text style={styles.leftTitle}>{this.props.leftTitle}</Text>
                    </View>
                    {/*右边*/}
                    <View style={styles.rightView}>
                        {this.rightSubView()}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    rightSubView() {
        return(
            <View style={{flexDirection:'row', alignItems:'center'}}>
                {this.renderRightContent()}
                {/*箭头*/}
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8, marginLeft:5}}/>
            </View>
        ) ;
    }

    renderRightContent() {
        if(this.props.rightIconName.length === 0){ // 不返回图片
            return(
                <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
            )
        }else{
            return(
                <Image source={{uri: this.props.rightIconName}}  style={{width:24, height:13}}/>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        // 主轴的方向
        flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 背景颜色
        backgroundColor:'white',
        // 垂直居中
        alignItems:'center',
        // 高度
        height:Platform.OS === 'ios' ? 40 : 36,

        // 下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftView: {
        // 主轴的方向
        flexDirection:'row',
        // 侧轴居中
        alignItems:'center',
        // 左外边距
        marginLeft:8
    },
    rightView: {

    },
    leftImg: {
        width:24,
        height:24,
        marginRight:6,
        // 圆角
        borderRadius:12
    },
    leftTitle: {
        fontSize:16
    }
});