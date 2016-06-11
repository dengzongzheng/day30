import React, {Component} from 'react'

import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableHighlight,
    StyleSheet
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
        var prices = [];
        for(var i in this.props.priceData){
            const _pric = this.props.priceData[i];
            var price = (
                <TouchableHighlight key={_pric.text} onPress={()=>this.props.selectPrice(_pric)}>
                    <View  style={[styles.menu_item]}><Text
                        style={[styles.menu_text]}>{_pric.text}</Text></View>
                </TouchableHighlight>
            );
            prices.push(price);
        }
        return(
            <TouchableHighlight style={styles.menu} onPress={()=>this.props.closeMenu()}>
                <View >
                    <View style={[styles.menu_item]}><Text style={[styles.menu_text]}>不限</Text></View>
                    {prices}
                </View>
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