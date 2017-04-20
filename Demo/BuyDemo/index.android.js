/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,Navigator
} from 'react-native';

import {
    Main
} from './Component/Main/Main'

import {
    LaunchImage
} from './Component/Main/LaunchImage'

export default class BuyDemo extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name:'启动页',component:LaunchImage}}
                configureScene={()=>{
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />
        );
    }
}

AppRegistry.registerComponent('BuyDemo', () => BuyDemo);
