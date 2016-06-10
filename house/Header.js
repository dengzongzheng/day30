import React, {Component} from 'react'
import {
    View,
    Text,
    SegmentedControlIOS,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native'

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
            tab:['新房','二手房','租房'],
        };
    }
    tabChange(value){
       this.props.tabChange(value);
    }
    render(){
        var currentTab = 0;
        if(this.props.currentTab=="new"){
            currentTab = 0;
        }
        else if(this.props.currentTab=="second"){
            currentTab = 1;
        }
        else if(this.props.currentTab=="rent"){
            currentTab = 2;
        }
        var that = this;
        return(
            <View>
                <View style={[styles.headerContainer]}>
                    <TouchableHighlight onPress={()=>{this.props.goBack()}}>
                        <View style={[styles.back]}>
                            <Image source={require('../image/house/back_button.png')}></Image>
                        </View>
                    </TouchableHighlight>
                    <View style={[styles.tabContainer]}>
                        <SegmentedControlIOS
                            style={[styles.tab]}
                            values={this.state.tab}
                            tintColor="red"
                            selectedIndex={currentTab}
                            onValueChange={(value)=>{this.props.tabChange(value)}}
                        />

                    </View>
                    <View style={[styles.search_map]}>
                        <View style={[styles.search]}>
                            <Image source={require('../image/house/home_search.png')}></Image>
                        </View>
                        <View style={[styles.map]}>
                            <Text style={[styles.map_text]}>地图</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    headerContainer:{
        height:33,
        marginTop:20,
        marginLeft:3,
        marginRight:5,
        marginBottom:5,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'#eee',
        flex:1,
        flexDirection:'row'
    },
    back: {
        width: 50,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tab: {
        flex: 1,
        flexDirection: 'row',
        height: 20,
        borderColor: '#eee',
        borderWidth: Util.pixel
    },
    search_map: {
        width: 80,
        height: 30,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    search: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map_text: {
        textAlign: 'center',
    }


});