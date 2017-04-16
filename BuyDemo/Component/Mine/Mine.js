/**
 * Created by silence on 2017/4/15.
 */

import React, { Component } from 'react';
import {
    StyleSheet, View, Text,ScrollView
} from 'react-native';

import {
    MyCell
} from './MyCell'

export class Mine extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>

                <View>
                    <MyCell
                        leftIconName="collect"
                        leftTitle="我的订单"
                        rightTitle="查看全部订单"
                    />
                </View>

                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="draft"
                        leftTitle="小码哥钱包"
                        rightTitle="账户余额:¥100"
                    />

                    <MyCell
                        leftIconName="like"
                        leftTitle="抵用券"
                        rightTitle="10张"
                    />
                </View>


                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="card"
                        leftTitle="积分商城"
                    />
                </View>

                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="new_friend"
                        leftTitle="今日推荐"
                        rightIconName="me_new"
                    />
                </View>

                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="pay"
                        leftTitle="我要合作"
                        rightTitle="轻松开店,招财进宝"
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#e8e8e8'
    },
});