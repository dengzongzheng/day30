import React,{Component} from 'react'

import {
    View,
    Text,
    StyleSheet,
    Slider,
    ScrollView
}from 'react-native'

'use district';

import Util from '../view/utils'

export default class extends Component{

    static propTypes = {

    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value:10
        };
    }

    render(){
        return (
            <ScrollView>

                <Slider
                  onValueChange={(value)=>{
                    this.setState({
                      value:value
                    })
                  }}
                  minimumValue={10}
                  maximumValue={100}
                  value={this.state.value}
                  step={1}

                />
                <View><Text>{this.state.value}</Text></View>

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({

});