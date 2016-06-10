import React, {Component} from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TabBarIOS
}from 'react-native'

'use district'

import Util from '../view/utils'

export default class TabBar extends Component{

    static propTypes = {

    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:'首页'
        };
    }
    _renderContent(){
        return(
            <View style={{flex:1}}>
               <Text>kkkkk</Text>
            </View>
        )
    }
    render(){
        const that = this;
        return(
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <Text>dzz</Text>

                </View>

                <TabBarIOS style={styles.tabBar}
                >
                    <TabBarIOS.Item
                        title="首页"
                        icon={require('../image/tabbar/tabbar_one.imageset/tabbar_one.png')}
                        selectedIcon={require('../image/tabbar/tabbar_one_selected.imageset/tabbar_one_selected.png')}
                        badge={1}
                        onPress={()=>{

                        }}
                    >
                        <View style={{flex:1,marginTop: 30}}>121212121</View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="预约单"
                        icon={require('../image/tabbar/tabbar_two.imageset/tabbar_two.png')}
                        selectedIcon={require('../image/tabbar/tabbar_two_selected.imageset/tabbar_two_selected.png')}
                        onPress={()=>{
                        }}
                    >
                        {this._renderContent}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="订单"
                        icon={require('../image/tabbar/tabbar_three.imageset/tabbar_three.png')}
                        selectedIcon={require('../image/tabbar/tabbar_three_selected.imageset/tabbar_three_selected.png')}
                        onPress={()=>{
                            that.setState({
                                selectedTab:'订单'
                            });
                        }}
                    >
                        {this._renderContent}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="我"
                        icon={require('../image/tabbar/tabbar_four.imageset/tabbar_four.png')}
                        selectedIcon={require('../image/tabbar/tabbar_four_selected.imageset/tabbar_four_selected.png')}
                        onPress={()=>{
                        }}
                    >
                        {this._renderContent}
                    </TabBarIOS.Item>
                </TabBarIOS>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    tabBarContiner:{
        flex:1
    },
    tabBar:{
        flex:1,
        alignItems:'flex-end'
    }

});