/**
 * Created by silence on 2017/4/14.
 */

import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TabBarIOS, NavigatorIOS
} from 'react-native';

import {Home} from '../Component/Home'
import {Find} from '../Component/Find'
import {Message} from '../Component/Message'
import {Mine} from '../Component/Mine'

export class Main extends Component {

    constructor(props) {
        super(props) ;
        // 设置选中表示
        this.state = {
           selectedItem:'home' // 默认首页被选中
        } ;
    }

    render() {
        return(
            <TabBarIOS>
                {/*首页*/}
                <TabBarIOS.Item
                    title='首页'
                    selected={this.state.selectedItem == 'home'}
                    onPress={() => {this.setState({selectedItem:'home'})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={
                            {
                                component: Home, // 具体的版块
                                title:'主页',
                                leftButtonTitle:'登陆',
                                rightButtonTitle:'注册'
                            }
                        }
                    />
                </TabBarIOS.Item>

                {/*消息*/}
                <TabBarIOS.Item
                    title='消息'
                    selected={this.state.selectedItem == 'message'}
                    onPress={() => {this.setState({selectedItem:'message'})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={
                            {
                                component: Message, // 具体的版块
                                title:'消息'
                            }
                        }
                    />
                </TabBarIOS.Item>

                {/*发现*/}
                <TabBarIOS.Item
                    title='发现'
                    selected={this.state.selectedItem == 'find'}
                    onPress={() => {this.setState({selectedItem:'find'})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={
                            {
                                component: Find, // 具体的版块
                                title:'发现'
                            }
                        }
                    />
                </TabBarIOS.Item>

                {/*我的*/}
                <TabBarIOS.Item
                    title='我的'
                    selected={this.state.selectedItem == 'mine'}
                    onPress={() => {this.setState({selectedItem:'mine'})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={
                            {
                                component: Mine, // 具体的版块
                                title:'我的'
                            }
                        }
                    />
                </TabBarIOS.Item>
            </TabBarIOS>
        ) ;
    }
}

const mainStyle = StyleSheet.create({

})