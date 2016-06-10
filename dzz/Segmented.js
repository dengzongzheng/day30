import React, {Component} from 'react'

import {
    SegmentedControlIOS,
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

'use district'

import Util from '../view/utils'

export default class extends Component {

    static propTypes = {};
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            menus:['新房','二手房','租房']
        };
    }
    _back(){
        this.props.nav.jumpBack();
    }

    render(){
        return (
           <View style={[styles.segmentedContainer]}>
               <TouchableHighlight onPress={this._back}>
                   <View style={[styles.box]} >
                       <Text>back</Text>
                   </View>
               </TouchableHighlight>
              <SegmentedControlIOS
                values={this.state.menus}
                tintColor="red"
                style={[styles.segment]}
                selectedIndex={0}
                onValueChange={(value)=>{
                  alert('选中了'+value);
                }}
              >
              </SegmentedControlIOS>
               <View style={[styles.box]}>
                   <Text>分享</Text>
               </View>
           </View>
        );
    }
}


const styles = StyleSheet.create({

    segmentedContainer:{
        marginTop:30,
        flex:1,
        flexDirection:'row'
    },
    segment:{
        height:30,
        flex:1
    },
    box:{
        width:Util.size.width/5,
        height:30,
        justifyContent:'center',
        alignItems:'center'
    }

});