import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableHighlight
} from 'react-native'

'use district';

import Util from '../../view/utils'

export default class extends Component{

    static propTypes = {

    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        return (
            <View>
                <Text>租房</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

});