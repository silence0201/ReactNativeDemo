/**
 * Created by silence on 2017/4/15.
 */

import React, { Component } from 'react';
import {
    StyleSheet,Image,Navigator,Platform,
} from 'react-native';

// 导入外部组件
import TabNavigator from 'react-native-tab-navigator';

import {Home} from '../Home/Home'
import {Mine} from '../Mine/Mine'
import {More} from '../More/More'
import {Shop} from '../Shop/Shop'


export class Main extends Component {

    constructor(props) {
        super(props) ;
        this.state = {
            selectedTab:'home' // 默认是第一个
        } ;
    }

    render() {
        return (
            <TabNavigator>
                {/*--首页--*/}
                {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected','home', '首页', Home)}
                {/*--商家--*/}
                {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected','shop', '商家', Shop)}
                {/*--我的--*/}
                {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected','mine', '我的', Mine)}
                {/*--更多--*/}
                {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected','more', '更多', More)}
            </TabNavigator>
        );
    }

    // 每一个TabBarItem
    renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName, component, badgeText){
        return(
            <TabNavigator.Item
                title={title}  // 传递变量,一定要加{}
                renderIcon={() => <Image source={{uri: iconName}} style={styles.icon}/>} // 图标
                renderSelectedIcon={() =><Image source={{uri: selectedIconName}} style={styles.icon}/>}   // 选中的图标
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitle}
                badgeText = {badgeText}
            >
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{// 过渡动画
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                />
            </TabNavigator.Item>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width:Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30: 25
    },
    selectedTitle: {
        color:'orange'
    }
});