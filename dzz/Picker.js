import React, {Component} from 'react'
import {
    View,
    Text,
    PickerIOS,
    StyleSheet,
    ScrollView
} from 'react-native'

'use district';

const PickerItemIOS = PickerIOS.Item;
export default class extends Component {
    static propTypes = {};


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        const COURSE_ITEMS = ['c++','java','android','ios'];
        this.state = {
           key:1,
           value:'java'
        };
    }

    render(){
        return (
            <ScrollView>
                <PickerIOS selectedValue={this.state.value} onValueChange={(value,key)=>{
                this.setState({
                value,key
                })
                }}>
                    <PickerItemIOS
                      key="0"
                      value='c++'
                      label="c++"
                    />
                    <PickerItemIOS
                        key="1"
                        value='java'
                        label="java"
                    />
                </PickerIOS>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({

});