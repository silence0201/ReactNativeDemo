/**
 * Created by silence on 2017/4/14.
 */

import React, { Component } from 'react';
import {
    StyleSheet, Text, View, ListView,TouchableOpacity, Image
} from 'react-native';

import {
    ScrollImage
} from '../Component/ScrollView';

import {
    NewsDetail
} from '../Component/NewsDetail' ;

let LocalData = require('../LocalData.json') ;

export class Home extends Component {

    static defaultProps = {
        url_api: "http://c.m.163.com/recommend/getSubDocPic?from=toutiao&prog=NOHEAD&open=&openpath=&passport=&devId=H0rJ9s1kuxUmPoVQGOCrQcQo8q%2BtsSwk3WPo0lFzLMEs90Ib%2Bra0sdq2IPqs/uN0&version=22.3&spever=false&net=wifi&lat=&lon=&ts=1492172327&sign=69bzyDLGFyw5GYREE1p03SZGNM6S9dpHZu7/N/FT89h48ErR02zJ6/KXOnxX046I&encrypti",
        key_word: 'tid'
    } ;

    constructor(props) {
        super(props) ;
        this.state = {
           headerDataArr: [] ,
           dataSource:  new ListView.DataSource({
               rowHasChanged: (r1, r2) => r1 !== r2
           })
        } ;
    }

    render() {
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRow(rowData)}
                renderHeader={() =>this.renderHeader()}
            />
        ) ;
    }

    // 头部
    renderHeader() {
        // 判断
        if (this.state.headerDataArr.length == 0) return;
        console.log(this.state.headerDataArr) ;
        return (
            <ScrollImage
                imageDataArr={this.state.headerDataArr}
            />
        );
    }



    renderRow(rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5}
                              onPress={()=>this.pushToNewsDetail(rowData)}>
                <View style={homeStyle.cell}>
                    {/*左边*/}
                    <Image source={{uri:rowData.imgsrc}} style={homeStyle.cellImage}/>
                    {/*右边*/}
                    <View style={homeStyle.cellRight}>
                        <Text style={homeStyle.title}>{rowData.title}</Text>
                        <Text style={homeStyle.subTitle}>{rowData.digest}</Text>
                        <Text style={homeStyle.flowTitle}>{rowData.replyCount}跟帖</Text>
                    </View>
                </View>
            </TouchableOpacity>
        ) ;
    }

    // 跳转到新闻详情页
    pushToNewsDetail(rowData){
        this.props.navigator.push({
            component: NewsDetail,
            title: rowData.title,
            passProps:{rowData}
        }) ;
    }




    // 请求网络数据
    componentDidMount() {
        this.loadDataFromNet() ;
    }

    loadDataFromNet() {
        fetch(this.props.url_api)
            .then((response)=>response.json())
            .then((responseData)=> {
                // 拿到所有的数据
                let jsonData = responseData[this.props.key_word];
                // console.log(jsonData) ;
                // 处理网络数据
                this.dealWithData(jsonData);
            })
            .catch((error)=>{
                if(error){
                    // 拿到所有的数据
                    let jsonData = LocalData[this.props.key_word];
                    // 特殊处理
                    this.dealWithData(jsonData)
                }
            }) ;
    }

    // 处理网络数据
    dealWithData(jsonData) {
        // 定义临时变量
        let headerArr = [];
        let listDataArr = [];
        // 遍历拿到的json数据
        for (let i = 0; i < jsonData.length; i++) {
            // 取出单独的对象
            let data = jsonData[i];
            // 判断
            if (data.hasAD == 1) { // 取出广告数据
                headerArr = data.ads;
            } else { // 剩余的行数据
                listDataArr.push(data);
            }
        }

        // 更新状态机
        this.setState({
            // ListView头部的数据源
            headerDataArr: headerArr,
            // cell的数据源
            dataSource: this.state.dataSource.cloneWithRows(listDataArr)
        });
    }
}

const homeStyle = StyleSheet.create({
    cell:{
        // 确定主轴的方向
        flexDirection:'row',
        // 设置侧轴的对齐方式
        // alignItems:'center',
        padding:10,
        // 设置下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    cellImage: {
        width:90,
        height:90
    },
    cellRight: {
        width: 260,
        marginLeft:8
    },
    title: {
        fontSize:16,
        marginBottom:5
    },
    subTitle: {
        color:'gray',
        marginBottom:20
    },
    flowTitle:{
        // 绝对定位
        position:'absolute',
        right:10,
        bottom:0,

        // 边框
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:5,
        padding:3,

        color:'gray'
    }
})