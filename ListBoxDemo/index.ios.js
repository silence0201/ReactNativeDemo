/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, ListView,Image,TouchableOpacity,AlertIOS
} from 'react-native';

let shareData = require('./shareData.json') ;
let Dimensions = require('Dimensions') ;
let {width} = Dimensions.get('window') ;

let clos = 3 ;
let cellWH = 100 ;
let vMargin = (width - cellWH*clos) / (clos + 1) ;
let hMargin = 25 ;

export default class ListBoxDemo extends Component {
  constructor(props) {
    super(props) ;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) ;
    this.state = {
      dataSource: ds.cloneWithRows(shareData.data)
    } ;
  }

  render() {
    return (
        <ListView
            contentContainerStyle={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
        />
    );
  }

  renderRow(rowData) {
    return(
        <TouchableOpacity
            onPress={()=>{AlertIOS.alert('点击了')}}
        >
          <View style={styles.row}>
            <Image source={{uri:rowData.icon}} style={styles.icon}/>
            <Text style={styles.title}>{rowData.title}</Text>
          </View>

        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    listView: {
        flexDirection:'row',
        flexWrap: 'wrap',
        marginTop:25
    },

    row: {
        width: cellWH,
        height:cellWH,
        marginLeft:vMargin,
        marginTop:hMargin,
        alignItems:'center'
    },
    icon: {
        width: 80,
        height:80
    },
    title: {
      marginTop:5
    }
});

AppRegistry.registerComponent('ListBoxDemo', () => ListBoxDemo);
