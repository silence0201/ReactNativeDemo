/**
 * Created by silence on 2017/4/18.
 */

import React, { Component } from 'react';
import {
    StyleSheet, View, Text,Platform,Image,WebView,TouchableOpacity
} from 'react-native';

export class ShopCenterDetail extends Component {

    constructor(props) {
        super(props) ;
        this.state = {
            detailUrl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        } ;
    }

    render() {
        return (
            <View style={styles.container}>
                {/*导航*/}
                {this.renderNavBar()}

                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    }

    // 导航条
    renderNavBar(){
        return(
            <View style={styles.navOutView}>
                <TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.leftView}>
                    <Image source={{uri: 'icon_camera_back_normal'}} style={styles.navImage}/>
                </TouchableOpacity>
                <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>购物中心详情</Text>
                <TouchableOpacity onPress={()=>{alert('点了!')}} style={styles.rightView}>
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.navImage}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    navImage:{
        width:Platform.OS === 'ios' ? 28: 24,
        height:Platform.OS === 'ios' ? 28: 24,
    },

    leftView:{
        // 绝对定位
        position:'absolute',
        left:10,
        bottom:Platform.OS === 'ios' ? 15:13
    },

    rightView:{
        // 绝对定位
        position:'absolute',
        right:10,
        bottom:Platform.OS === 'ios' ? 15:13
    },

    navOutView:{
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center'
    },
});