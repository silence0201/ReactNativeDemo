/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, ListView, Image, TouchableOpacity,AlertIOS
} from 'react-native';

let Wine = require('./Wine.json') ;
var Dimensions = require('Dimensions') ;
var {width} = Dimensions.get('window') ;

export default class ListViewDemo extends Component {
    constructor(props) {
        super(props) ;
        // 设置数据源
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) ;
        // 设置访问数据
        this.state = {
            dataSource:ds.cloneWithRows(Wine)
        };
    }

    render() {
        return(
            <ListView style={styles.container}
                dataSource={this.state.dataSource} // 数据源
                renderRow={(rowData,sectionID,rowID,highlightRow) => this.renderRow(rowData,sectionID,rowID,highlightRow)}
            />
        ) ;
    }

    renderRow(rowData,sectionID,rowID,highlightRow) {
        console.log(rowData) ;
        return (
            <TouchableOpacity activeOpacity={0.5}
                              onPress={() => {AlertIOS.alert('点击了'+rowID+'行')}}
            >
                <View style={styles.cell}>
                    <Image source={{uri:rowData.image}} style={styles.image}/>
                    <View style={styles.rightView}>
                        <Text style={styles.title}>{rowData.name}</Text>
                        <Text style={styles.money}>${rowData.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        ) ;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop:25
    },

    cell: {
        backgroundColor:'white',
        borderBottomWidth:0.5,
        borderColor:'gray',
        flexDirection:'row',
        padding:10
    },

    image: {
        width:60,
        height:60,
        marginRight:20
    },

    rightView: {
        justifyContent:'center'
    },

    title: {
        fontSize:15,
        width: width*0.7,
    },

    money: {
        marginTop:5,
        color:'blue'
    }
});

AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
