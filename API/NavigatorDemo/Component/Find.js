/**
 * Created by silence on 2017/4/14.
 */

import React, { Component } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';

export class Find extends Component {
    render() {
        return(
            <View style={findStyle.container}>
                <Text style={findStyle.welcome}>发现</Text>
            </View>
        ) ;
    }
}

const findStyle = StyleSheet.create({
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