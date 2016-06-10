import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ActivityIndicatorIOS
}from 'react-native'

'use district';

import Util from '../view/utils'

export default class ActivityIndicator extends  Component{

    static propTypes={

    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            hides:true,
            animating:true
        };
    }

    render(){
        return(
            <ScrollView >
                <ActivityIndicatorIOS
                  color="red"
                  hidesWhenStopped={this.state.hides}
                  animating={this.state.animating}
                >
                </ActivityIndicatorIOS>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({

    container:{
        marginTop:100,
        flex:1,
        height:Util.size.height/5
    }

});
