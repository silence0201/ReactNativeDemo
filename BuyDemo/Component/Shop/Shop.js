/**
 * Created by silence on 2017/4/15.
 */

import React, { Component } from 'react';
import {
    StyleSheet, View, Text
} from 'react-native';

export class Shop extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>购物</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});