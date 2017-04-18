/**
 * Created by silence on 2017/4/18.
 */

import React, { Component } from 'react';
import {
    StyleSheet, View, Text,Image,TouchableOpacity,ListView
} from 'react-native';

import {
    BottomCommonCell
} from './BottomCommonCell' ;

// 导入外部的json数据
let youLikeData = require('../../LocalData/HomeGeustYouLike.json');

export class GuestYouLike extends Component {

    static defaultProps = {
        api_url:'http://api.meituan1.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
    }

    constructor(props) {
        super(props) ;
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <BottomCommonCell
                    leftIcon = 'cnxh'
                    leftTitle = '猜你喜欢'
                />
                {/*列表*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}
                />
            </View>
        );
    }

    // 处理图像的尺寸
    dealWithImgUrl(url) {
        if (url.search('w.h') === -1){ // 没有找到,正常返回
            return url;
        }else{
            return url.replace('w.h', '120.90');
        }
    }

    renderRow(rowData){
        let urlImage = this.dealWithImgUrl(rowData.imageUrl) ;
        return(
            <TouchableOpacity onPress={()=>alert(0)}>
                <View style={styles.listView}>
                    {/*左边*/}
                    <Image source={{uri:urlImage}} style={styles.imageView}/>
                    {/*右边*/}
                    <View style={styles.rightView}>
                        <View style={styles.rightTopView}>
                            <Text>{rowData.title}</Text>
                            <Text>{rowData.topRightInfo}</Text>
                        </View>
                        <Text style={{color:'gray'}}>{rowData.subTitle}</Text>
                        <View  style={styles.rightBottomView}>
                            <Text style={{color:'red'}}>{rowData.subMessage}</Text>
                            <Text>{rowData.bottomRightInfo}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }



    componentDidMount(){
        // 从网络上请求数据
        this.loadDataFormNet();
    }

    loadDataFormNet(){
        fetch(this.props.api_url)
            .then((response) => response.json()) // 下一步
            .then((responseData) => {
                // 更新数据源
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                });
            })
            .catch((error)=>{
                // 更新数据源
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(youLikeData.data)
                });
            })
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

    listView:{
        backgroundColor:'white',
        padding:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,

        flexDirection:'row'
    },

    imageView:{
        width:120,
        height:90
    },

    rightView:{
        marginLeft:8,
        width:220,
        justifyContent:'center'
    },

    rightTopView:{
        flexDirection:'row',
        marginBottom:7,
        justifyContent:'space-between'
    },

    rightBottomView:{
        flexDirection:'row',
        marginTop:7,
        justifyContent:'space-between'
    }
});