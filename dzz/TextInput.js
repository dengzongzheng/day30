import React, {Component} from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView
}from 'react-native'

'use district';

import Util from '../view/utils'

export default class extends Component {
    static propTypes = {};
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            text:''
        };
    }
    render(){
        const that = this;
        return (
            <ScrollView>
                <TextInput placeholder={'请输入'} style={styles.textInput} value={this.state.text} onChangeText={(text)=>{
                 that.setState({
                   text:text
                 })
                }}></TextInput>

                <TextInput style={styles.textInput} multiline={false} autoCapitalize="words" keyboardType="email-address"></TextInput>
                <TextInput style={styles.textInput} autoFocus={true}></TextInput>
                <TextInput style={styles.textInput} editable={false} defaultValue="dzz"></TextInput>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    textInput:{

        height:30,
        borderColor:'gray',
        borderWidth:Util.pixel,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        width:Util.size.width/1.5,


    }

});