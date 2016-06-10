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
        return (
            <TouchableHighlight style={styles.menu}>
                <View>
                    
                </View>
                <View>

                </View>
            </TouchableHighlight>
        );
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