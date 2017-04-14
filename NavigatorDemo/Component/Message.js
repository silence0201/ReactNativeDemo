/**
 * Created by silence on 2017/4/14.
 */

import React, { Component } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';

export class Message extends Component {
    render() {
        return(
            <View style={messageStyle.container}>
                <Text style={messageStyle.welcome}>消息</Text>
            </View>
        ) ;
    }
}

const messageStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})