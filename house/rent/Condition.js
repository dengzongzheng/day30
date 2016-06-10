import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ListView,
    TouchableHighlight
} from 'react-native'

'use district'

export default class extends Component{

    static propTypes ={

    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        return (
            <View style={styles.conditionContainer}></View>
        )
    }
}

const styles = StyleSheet.create({

    conditionContainer:{

        height:25
    }

});