import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight
} from 'react-native'

'use district';

import Util from '../../view/utils'

export default class extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render(){
        return(
            <TouchableHighlight style={styles.menu} onPress={()=>this.props.closeMenu()}>
                <ScrollView>
                    <TouchableHighlight onPress={()=>this.props.selectRoom()}>
                        <View style={[styles.menu_item]}><Text style={[styles.menu_text]}>不限</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={()=>this.props.selectRoom(1)}>
                        <View style={[styles.menu_item]}><Text style={[styles.menu_text]}>一室</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={()=>this.props.selectRoom(2)}>
                        <View style={[styles.menu_item]}><Text style={[styles.menu_text]}>两室</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.selectRoom(3)}>
                        <View style={[styles.menu_item]}><Text style={[styles.menu_text]}>三室</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.selectRoom(4)}>
                        <View style={[styles.menu_item]}><Text style={[styles.menu_text]}>四室</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.selectRoom(5)}>
                        <View style={[styles.menu_item]}><Text style={[styles.menu_text]}>五室</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.selectRoom(6)}>
                        <View style={[styles.menu_item]}><Text style={[styles.menu_text]}>五室以上</Text></View>
                    </TouchableHighlight>
                </ScrollView>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        top: 84,
        position: "absolute",
        width: Util.size.width,
        height: Util.size.height - 85,
        backgroundColor: 111
    },
    menu_item: {
        height: 30,
        padding: 10,
        borderBottomWidth: Util.pixel,
        borderBottomColor: '#eee',
        backgroundColor: 'white',
        justifyContent: 'center',
        opacity: 1
    },
    menu_text: {
        fontSize: 12
    }
});