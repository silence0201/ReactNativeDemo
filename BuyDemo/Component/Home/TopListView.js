/**
 * Created by silence on 2017/4/16.
 */

import React, { Component } from 'react';
import {
    StyleSheet, View, Text,ListView,TouchableOpacity,Image,Platform
} from 'react-native';

let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');

// 全局的变量
let cols = 5;
let cellW = Platform.OS === 'ios' ? 70: 60;
let cellH = 70;
let vMargin = (width - cellW * cols) / (cols + 1);


export class TopListView extends Component {
    static defaultProps = {
        dataArr: []
    } ;

    constructor(props) {
        super(props) ;
        // 创建数据源
        let ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        } ;
    }


    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentView}
                scrollEnabled={false}
            />
        );
    }

    // 具体的cell
    renderRow(rowdata){
        return(
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.cell}>
                    <Image source={{uri: rowdata.image}} style={{width:52, height:52}}/>
                    <Text style={styles.title}>{rowdata.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    contentView:{
        // 设置主轴的方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',
        // 宽度
        width:width
    },

    cell:{
        // backgroundColor:'red',
        width:cellW,
        height:cellH,
        // 水平居中和垂直居中
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:vMargin
    },

    title:{
        fontSize:Platform.OS === 'ios' ? 13.5 : 12,
        color:'gray'
    }
});