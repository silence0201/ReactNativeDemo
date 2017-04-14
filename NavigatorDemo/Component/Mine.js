/**
 * Created by silence on 2017/4/14.
 */

import React, { Component } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';

export class Mine extends Component {
    render() {
        return(
            <View style={mineStyle.container}>
                <Text style={mineStyle.welcome}>我的</Text>
            </View>
        ) ;
    }
}

const mineStyle = StyleSheet.create({
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