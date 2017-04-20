/**
 * Created by silence on 2017/4/15.
 */

import React, { Component } from 'react';
import {
    StyleSheet, Image
} from 'react-native';

import {
    Main
} from './Main'

export class LaunchImage extends Component {

    render() {
        return (
            <Image source={{uri: 'launchimage'}} style={styles.launchImage}/>
        );
    }

    // 复杂的操作:定时器\网络请求
    componentDidMount(){
        // 定时: 隔2s切换到Main
        setTimeout(()=>{
            // 页面的切换
            this.props.navigator.replace({
                component: Main, // 具体路由的版块
            });
        }, 1500);
    }

}

const styles = StyleSheet.create({
    launchImage: {
        flex:1
    }
});