/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Navigator,AppRegistry,DeviceEventEmitter,Image,NavigatorIOS,ScrollView,StatusBarIOS,StyleSheet,Text,TouchableHighlight,View} from 'react-native';


import Util from './view/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import D1  from './dzz/d1'
import DText from './dzz/Text'
import DImage from './dzz/Image'
import TextInput from './dzz/TextInput'
import ProgressBar from './dzz/ProgressBar'
import Picker from './dzz/Picker'
import Segmented from './dzz/Segmented'
import Slider from './dzz/Slider'
import TabBar from './dzz/TabBar'
import ActivityIndicator from './dzz/ActivityIndicator'
import Header from './house/Header'
import House from './house/House'
import NewHouse from './house/new/NewHouse'

class MainViews extends Component {
    constructor(propos) {
      super(propos);
      // 初始状态
      this.state = {
        days:[{
          key:1,
          title:'Text',
          component:DText,
          isFA: false,
          icon: "ios-stopwatch",
          size: 48,
          color: "#ff856c",
          hideNav: false
        },{
          key:2,
          title:'Image',
          component:DImage,
          isFA: false,
          icon: "ios-stopwatch",
          size: 48,
          color: "#ff856c",
          hideNav: false
        },{
            key:3,
            title:'TextInput',
            component:TextInput,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: false
        },{
            key:4,
            title:'ProgressBar',
            component:ProgressBar,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: false
        },{
            key:5,
            title:'Picker',
            component:Picker,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: false
        },{
            key:6,
            title:'Segmented',
            component:Segmented,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: true
        },{
            key:7,
            title:'Slider',
            component:Slider,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: false
        },{
            key:8,
            title:'TabBar',
            component:TabBar,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: true
        },{
            key:9,
            title:'ActivityIndicator',
            component:ActivityIndicator,
            isFA: false,
            icon: "ios-stopwatch",
            size: 10,
            color: "#ff856c",
            hideNav: false
        },{
            key:11,
            title:'Header',
            component:Header,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: true
        },{
            key:12,
            title:'House',
            component:House,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: true
        },{
            key:13,
            title:'NewHouse',
            component:NewHouse,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: true
        },{
            key:14,
            title:'day1',
            component:D1,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: false
        },{
            key:15,
            title:'day2',
            component:D1,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: false
        },{
            key:16,
            title:'day3',
            component:D1,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: false
        },{
            key:17,
            title:'day1',
            component:D1,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: false
        },{
            key:18,
            title:'day2',
            component:D1,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: false
        },{
            key:19,
            title:'day3',
            component:D1,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: false
        }]
      };
    }
    _jumpTo(index){
       this.props.navigator.push(
           {
               title:this.state.days[index].title,
               component:this.state.days[index].component,
               navigationBarHidden:this.state.days[index].hideNav,
               sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
               ref:'nav'
           }
       );
    }
    render(){
      var that = this;
      var boxs = this.state.days.map(function (elem,index) {
          return (
              <TouchableHighlight key={elem.key} onPress={()=>{that._jumpTo(index)}} style={[styles.touchBox,(index+1)%3==0?styles.touchBox2:styles.touchBox1]}>
                  <View style={[styles.boxContainer]}>
                      <Text>{elem.title}</Text>
                  </View>
              </TouchableHighlight>
          )
      });
       return (
           <ScrollView>
               <View style={[styles.touchBoxContainer]}>
                   {boxs}
               </View>
           </ScrollView>

       )
    }

}

class day30 extends Component {
  render() {
    return (
        <NavigatorIOS
            style={styles.container}
            initialRoute={{
              component:MainViews,
              title:'30day',
              navigationBarHidden:false,
            }}
            ref='nav'
            tintColor="#777"

        >


      </NavigatorIOS>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    touchBox:{
        width:Util.size.width/3,
        height:Util.size.width/3,
        backgroundColor:'#FFF'
    },
    boxContainer:{
        width:Util.size.width/3,
        height:Util.size.width/3,
        alignItems:'center',
        justifyContent:'center'
    },
    touchBox1:{
        borderRightWidth:Util.pixel,
        borderRightColor:'#CCC',
        borderBottomWidth:Util.pixel,
        borderBottomColor:'#CCC'
    },
    touchBox2:{
        borderBottomWidth:Util.pixel,
        borderBottomColor:'#CCC'
    },
    touchBoxContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderTopWidth: Util.pixel,
        flexWrap:'wrap'
    },
    mainContainer:{
        marginTop:80
    },
    boxIcon:{
        position:"relative",
        top:-10
    },
});

AppRegistry.registerComponent('day30', () => day30);
