/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View,Image,TouchableOpacity,ListView
} from 'react-native';

// 导入外部JSON数据
let Cars = require('./Car.json') ;

export default class CarListDemo extends Component {

  constructor(props) {
    super(props) ;

    // 取组数据
    let getSectionData = (dataBlob,sectionID) => {
        return dataBlob[sectionID] ;
    } ;

    let getRowData = (dataBlob,sectionID,rowID) => {
        return dataBlob[sectionID + ':' + rowID] ;
    } ;

    this.state = {
        dataSource: new ListView.DataSource({
            getSectionData: getSectionData, // 获取组中数据
            getRowData: getRowData, // 获取行中的数据
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged:(s1, s2) => s1 !== s2
        }),
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.headerView}>
            <Text style={styles.headerTitle}>汽车品牌</Text>
          </View>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
              renderSectionHeader={this.renderSectionHeader}
          />
        </View>
    );
  }

  renderRow(rowData) {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.row}>
          <Image source={{uri:rowData.icon}} style={styles.image}/>
          <Text style={styles.name}>{rowData.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderSectionHeader(sectionData,sectionID) {
    return(
        <View style={styles.sectionHeaderView}>
          <Text style={{marginLeft:5}}>{sectionData}</Text>
        </View>
    );
  }

  // 复杂的操作:数据请求或者异步请求
  componentDidMount() {
      // 电泳图JSON数据
      this.loadDataFromJSON() ;
  }

  loadDataFromJSON() {
      // 拿到JSON数据
      let jsonData = Cars.data ;

      let dataBlob = {} ;
      let sectionIDs = [] ;
      let rowIDs = [] ;
      let cars = [] ;
      
      // 遍历
      for (let i = 0;i<jsonData.length;i++) {
        // 组号
        sectionIDs.push(i) ;
        // 组中的内容以及行的内容
        dataBlob[i] = jsonData[i].title ;
        cars = jsonData[i].cars ;
        rowIDs[i] = [] ;
        for (let j = 0;j<cars.length;j++) {
          rowIDs[i].push(j) ;
          dataBlob[i+':'+j] = cars[j] ;
        }
      }
      
      this.setState({
          dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
      }) ;
  }

}

const styles = StyleSheet.create({
    container: {

    },

    row: {
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    name: {
        marginLeft:10,
        fontSize:20
    },

    image:{
        width:70,
        height:70,
        borderRadius:35
    },

    headerView: {
        height:64,
        backgroundColor:'gray',
        justifyContent:'center',
        alignItems:'center',
    },
    headerTitle:{
        fontSize:25
    },
    sectionHeaderView:{
        backgroundColor:'#e8e8e8',
        height:15,
        justifyContent:'center',
    }
});

AppRegistry.registerComponent('CarListDemo', () => CarListDemo);
