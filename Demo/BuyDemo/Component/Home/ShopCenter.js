/**
 * Created by silence on 2017/4/18.
 */

import React, { Component } from 'react';
import {
    StyleSheet, View, Text,ScrollView,Image,TouchableOpacity
} from 'react-native';

import {
    BottomCommonCell
} from './BottomCommonCell' ;



// 引入外部的json数据
let Home_D5 = require('../../LocalData/XMG_Home_D5.json');

export class ShopCenter extends Component {

    static defaultProps = {
        // 回调函数
        popToHomeView: null
    }

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <BottomCommonCell
                    leftIcon="gw"
                    leftTitle="购物中心"
                    rightTitle={Home_D5.tips}
                />
                {/*下部分*/}
                <ScrollView
                    style={styles.scrollView}
                    horizontal={true} // 横向
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    }

    // 返回下部分所有的Item
    renderAllItem(){
        // 定义组件数组
        let itemArr = [];
        // 取出数据
        let shopData= Home_D5.data;
        // 遍历
        for (let i=0; i<shopData.length; i++){
            // 取出单个数据
            let data = shopData[i];
            // 创建组件装入数组
            itemArr.push(
                <ShopCenterItem
                    shopImage = {data.img}
                    shopSale = {data.showtext.text}
                    shopName = {data.name}
                    detailurl = {data.detailurl}
                    key={i}
                    popTopShopCenter = {(url)=>this.popTopHome(url)}
                />
            );
        }
        // 返回
        return itemArr;
    }

    popTopHome(url){
        // 判断
        if (this.props.popToHomeView === null) return;

        // 执行回调函数
        this.props.popToHomeView(url);
    }
}

class ShopCenterItem extends Component {
    static defaultProps = {
        shopImage: '',
        shopSale:'',
        shopName: '',
        detailurl: '',
        popTopShopCenter: null
    }

    render(){
        return(
            <TouchableOpacity onPress={()=>this.clickItem(this.props.detailurl)}>
                <View style={styles.itemView}>
                    <Image source={{uri: this.props.shopImage}} style={styles.image}/>
                    <Text style={styles.shopSale}>{this.props.shopSale}</Text>
                    <Text style={styles.shopName}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    clickItem(url){
        // 判断
        if (this.props.detailurl === null) return;
        // 执行回调函数
        this.props.popTopShopCenter(url);
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:15
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    image:{
        width:120,
        height:100,
        borderRadius:8
    },

    scrollView:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:10
    },

    itemView:{
        margin:8
    },

    shopSale:{
        // 绝对定位
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'red',
        color:'white',
        padding:2
    },

    shopName:{
        textAlign:'center',
        marginTop:5
    }
});