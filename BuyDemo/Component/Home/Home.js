/**
 * Created by silence on 2017/4/15.
 */

import React, { Component } from 'react';
import {
    StyleSheet, View, Text,TouchableOpacity, Image, TextInput,Platform,ScrollView
} from 'react-native';

import {
    TopView
} from './TopView'

import {
    HomeMiddleView
} from './HomeMiddleView'

import {
    MiddleBottomView
} from './MiddleBottomView'

import {
    HomeDetail
} from './HomeDetail'

import {
    ShopCenter
} from './ShopCenter'

import {
    ShopCenterDetail
} from './ShopCenterDetail'

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*首页导航条*/}
                {this.renderNavBar()}
                {/*首页的主要内容*/}
                <ScrollView>
                    {/*头部View*/}
                    <TopView />
                    {/*中间的内容*/}
                    <HomeMiddleView />
                    {/*中间下半部分的内容*/}
                    <MiddleBottomView
                        popTopHome={(data)=>{this.pushToDetail(data)}}
                    />
                    {/*购物中心*/}
                    <ShopCenter
                        popToHomeView = {(url) => this.pushToShopCenterDetail(url)}
                    />
                </ScrollView>
            </View>
        );
    }

    renderNavBar() {
        return(
            <View style={styles.navBar}>
                {/*左边*/}
                <TouchableOpacity>
                    <Text style={{color:'white',marginLeft:10}}>广州</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    placeholder="输入商家, 品类, 商圈"
                    style={styles.topInput}
                />
                {/*右边*/}
                <View style={styles.rightNavView}>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImg} />
                    </TouchableOpacity>
                </View>
            </View>
        ) ;
    }

    // 跳转到购物中心详情页
    pushToShopCenterDetail(url){
        this.props.navigator.push(
            {
                component: ShopCenterDetail, // 要跳转的版块
                passProps: {'url': this.dealWithUrl(url)}
            }
        );
    }

    // 处理URL
    dealWithUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=', '');
    }

    // 跳转到二级界面
    pushToDetail(data){
        // alert(data);
        this.props.navigator.push(
            {
                component: HomeDetail, // 要跳转的版块
                title:'详情页'
            }
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    navBar: { // 导航条样式
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',
        // 设置主轴的方向
        flexDirection:'row',
        alignItems:'center',
        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },
    topInput: {
        flex:1,
        marginLeft:10,
        marginRight:10,
        height:Platform.OS === 'ios' ? 35 : 30,
        backgroundColor:'white',
        marginTop: Platform.OS === 'ios' ? 18 : 0,
        // 设置圆角
        borderRadius:16,
        paddingLeft:16
    },
    rightNavView: {
        flexDirection:'row',
        // backgroundColor:'blue',
        height:Platform.OS === 'ios' ? 64 : 44,
        // 设置侧轴的对齐方式
        alignItems:'center'
    },
    navRightImg: { // 设置图片大小
        width:30,
        height:30
    },


});