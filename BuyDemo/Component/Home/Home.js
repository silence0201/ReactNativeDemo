/**
 * Created by silence on 2017/4/15.
 */

import React, { Component } from 'react';
import {
    StyleSheet, View, Text,TouchableOpacity, Image, TextInput,Platform
} from 'react-native';

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*首页导航条*/}
                {this.renderNavBar()}

            </View>
        );
    }

    renderNavBar() {
        return(
            <View style={styles.navBar}>
                {/*左边*/}
                <TouchableOpacity>
                    <Text style={{color:'white'}}>广州</Text>
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