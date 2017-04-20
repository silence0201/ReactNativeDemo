/**
 * Created by silence on 2017/4/14.
 */


import React, { Component } from 'react';
import {
    StyleSheet, WebView
} from 'react-native';

export class NewsDetail extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            detailData:''
        } ;
    }


    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={true}
                style={styles.webView}
                source={{html: this.state.detailData, baseUrl: ''}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
            />
        );
    }

    componentDidMount(){
        // 请求的路径
        let url_api = 'http://c.3g.163.com/nc/article/' + this.props.rowData.docid + '/full.html';
        // 发送请求
        fetch(url_api)
            .then((response) => response.json())
            .then((responseData)=>{
                // 处理拿到的数据
                let allData = responseData[this.props.rowData.docid];

                console.log(allData);

                // 拿到body
                let bodyHtml = allData['body'];

                // 拿到图片数据
                if(allData['img'].length > 0){
                    // 遍历
                    for(let i=0; i<allData['img'].length; i++){
                        // 取出单个图片对象
                        let img = allData['img'][i];
                        // 取出src
                        let imgSrc = img['src'];
                        let imgHtml = '<img src="' + imgSrc + '" width="100%">';
                        // 替换body中的图像占位符
                        bodyHtml = bodyHtml.replace(img['ref'], imgHtml);
                    }
                }
                // 更新状态机
                this.setState({
                    detailData:bodyHtml
                });

            })
            .catch((error) => {
                alert('请求数据失败');
            })
    }
}

const styles = StyleSheet.create({
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
    }
});