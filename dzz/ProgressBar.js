import React, {Component} from 'react'
import {
    Text,
    View,
    ProgressViewIOS,
    ScrollView,
    StyleSheet
} from 'react-native'

export default class extends Component {
    static propTypes = {};
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render(){
        return (
            <ScrollView style={styles.progressView}>
                <ProgressViewIOS
                    styleAttr='Large'
                    progress={0.5}
                    progressViewStyle="default"

                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
   progressView:{
       height:150,
       marginTop:30
   }
});