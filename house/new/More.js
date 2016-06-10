import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Slider
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
        var tags = [];
        for(var i in this.props.tagData){
            var tag = (
                <Text key={this.props.tagData[i].code} style={[styles.text_box]}>{this.props.tagData[i].name}</Text>
            );
            tags.push(tag);
        }
        return (
            <View style={styles.menu}>
                <View style={[styles.menuContent]}>
                    <ScrollView style={[{flex:1}]}>
                        <View style={[styles.flex_row,styles.menu_item]}>
                            <View style={[styles.item_title]}><Text style={[styles.menu_text]}>面积(㎡)</Text></View>
                            <View style={[styles.flex,styles.menu_item]}>
                                <Slider
                                    minimumValue={1}
                                    maximumValue={100}
                                    step={10}
                                    value={1}
                                />
                            </View>
                        </View>
                        <View style={[styles.flex_row,styles.menu_item]}>
                            <View style={[styles.item_title]}><Text style={[styles.menu_text]}>特色</Text></View>
                            <View style={[styles.flex_row,styles.menu_item]}>
                                {tags}
                            </View>
                        </View>
                        <View style={[styles.flex_row,styles.menu_item]}>
                            <View>
                                <View style={[styles.item_title]}><Text style={[styles.menu_text]}>排序</Text></View>
                                <View style={styles.item_order}><Text style={[styles.menu_text]}>默认排序</Text></View>
                                <View style={styles.item_order}><Text style={[styles.menu_text]}>售价由低到高</Text></View>
                                <View style={styles.item_order}><Text style={[styles.menu_text]}>售价由高到低</Text></View>
                                <View style={styles.item_order}><Text style={[styles.menu_text]}>面积由小到大</Text></View>
                                <View style={styles.item_order}><Text style={[styles.menu_text]}>面积由大到小</Text></View>
                            </View>
                        </View>
                        <View style={[styles.flex_row,styles.menu_item]}>
                            <TouchableHighlight style={styles.button} onPress={()=>this.props.selectMore()}>
                                <Text style={[styles.button_text]}>确定筛选</Text>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                </View>
                <TouchableHighlight style={styles.flex} onPress={()=>this.props.closeMenu()}>
                    <View></View>
                </TouchableHighlight>
            </View>
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
    menuContent:{
        height: Util.size.height-150
    },
    flex:{
        flex:1
    },
    flex_row:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    item_title:{
        height:20,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'#eee'
    },
    menu_item: {
        padding: 10,
        borderBottomWidth: Util.pixel,
        borderBottomColor: '#eee',
        backgroundColor: 'white',
        opacity: 1
    },
    menu_text: {
        fontSize: 12
    },
    text_box:{
        fontSize:11,
        borderWidth:Util.pixel,
        borderColor:'black',
        height:20,
        padding:3,
        margin:5
    },
    button:{
        backgroundColor:'red',
        padding:5,
        flex:1,
        borderWidth:Util.pixel,
        borderColor:'black',
        justifyContent:'center',
        alignItems:'center',
        height:30
    },
    button_text:{
        color:'white',
        fontWeight:'bold'
    },
    item_order:{
        height:30
    }
});