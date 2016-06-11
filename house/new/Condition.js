import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ListView,
    TouchableHighlight,
    ScrollView
} from 'react-native'

'use district'

export default class extends Component{

    static propTypes ={

    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }

    render(){
        return (
            <View>
                <View style={styles.conditionContainer}>
                    <TouchableHighlight onPress={()=>this.props.selectMenu('isArea')} style={styles.flex_row} underlayColor='#eee'>
                        <View style={[styles.menu_box]}><Text style={[styles.menu_text]}>区域</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.selectMenu('isPrice')} style={styles.flex_row} underlayColor='#eee'>
                        <View style={[styles.menu_box]}><Text style={[styles.menu_text]}>售价</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.selectMenu('isRoom')} style={styles.flex_row} underlayColor='#eee'>
                        <View style={[styles.menu_box]}><Text style={[styles.menu_text]}>户型</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.selectMenu('isMore')} style={styles.flex_row} underlayColor='#eee'>
                        <View style={[styles.menu_box]}><Text style={[styles.menu_text]}>更多</Text></View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    conditionContainer:{
        flex:1,
        height:25,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    menu_box:{
        flex:1
    },
    menu_text:{
        textAlign:'center'
    },
    flex_row:{
        flex:1
    }

});