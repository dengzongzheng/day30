import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native'

'use district';

import Util from '../view/utils';

export default class extends Component {

    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        return (
            <ScrollView style={styles.textContainer} >
                <Text style={[styles.text]}>努力!进步!
                   <Text style={[styles.text1]}>变强,更强!</Text>
                </Text>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({

    textContainer:{
        width:Util.size.width,
        height:Util.size.height/5,
        marginTop:20,
        marginLeft:20
    },
    text:{
        color:'#DDD',
        fontWeight:'bold'
    },
    text1:{
        fontWeight:"900",
        color:'red',
        fontStyle:'italic'
    }
});