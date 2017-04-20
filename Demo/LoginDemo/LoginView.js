/**
 * Created by silence on 2017/4/12.
 */


import React, { Component } from 'react';
import {
    StyleSheet, View, Text,Image,TextInput
} from 'react-native';

import Dimensions from 'Dimensions' ;

let width = Dimensions.get('window').width ;

export class LoginView extends Component {
    render() {
        return (
            <View style={loginViewStyles.container}>
                {/*头像*/}
                <Image source={require('./img/icon.png')} style={loginViewStyles.icon}/>
                {/*两个输入框*/}
                <TextInput placeholder='请输入用户名' style={loginViewStyles.textInput}/>
                <TextInput placeholder='请输入密码' password={true} style={loginViewStyles.textInput}/>
                {/*登陆*/}
                <View style={loginViewStyles.loginBtn}>
                    <Text style={{color:'white'}}>登陆</Text>
                </View>
                {/*设置*/}
                <View style={loginViewStyles.setting}>
                    <Text>无法登陆</Text>
                    <Text>新用户</Text>
                </View>
                {/*其他登陆方式*/}
                <View style={loginViewStyles.otherLogin}>
                    <Text>其他登陆方式</Text>
                    <Image source={require('./img/icon3.png')} style={loginViewStyles.otherImage}/>
                    <Image source={require('./img/icon7.png')} style={loginViewStyles.otherImage}/>
                    <Image source={require('./img/icon8.png')} style={loginViewStyles.otherImage}/>
                </View>
            </View>
        );
    }
}

const loginViewStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#dddddd',
        // 设置侧轴的对其方式
        alignItems:'center'
    },

    icon: {
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:2,
        borderColor:'white',
        marginTop:50,
        marginBottom:30
    },

    textInput: {
        height:38,
        backgroundColor:'white',
        marginBottom:1,
        textAlign:'center',
        width:width,
    },
    loginBtn: {
        height:35,
        width:300,
        backgroundColor:'blue',

        justifyContent:'center',
        alignItems:'center',

        marginTop:30,
        marginBottom:30
    },

    setting: {
        flexDirection:'row',
        width:300,
        // 设置主轴对齐方式
        justifyContent:'space-between'
    },

    otherLogin: {
        flexDirection:'row',
        alignItems:'center',
        // 绝对定位
        position:'absolute',
        bottom:30
    },

    otherImage: {
        width:40,
        height:40,
        borderRadius:20,
        marginLeft:20
    }
}) ;


