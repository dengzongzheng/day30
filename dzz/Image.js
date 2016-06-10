import React, {Component} from 'react'
import {
    Image,
    Text,
    StyleSheet,
    View,
    ScrollView
}from 'react-native'

'use district';

export default class extends Component {

    static propTypes = {};
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render(){
        return(
            <ScrollView style={styles.imageContainer}>
                <Image style={styles.image} source={require('../image/mn.jpg')}>
                </Image>
                <Text style={styles.imageText}>爱大宝</Text>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({


    image:{
        height:100,
        width:100,
        resizeMode:'stretch',
        borderRadius:89
    },
    imageContainer:{

    },
    imageText:{
        textAlign:'center',
        color:'red',
        fontSize:16,
    }

});