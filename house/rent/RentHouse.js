import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    ListView
} from 'react-native'

'use district';

import Util from '../../view/utils'

export default class extends Component{

    static propTypes = {

    };

    // 构造
    constructor(props) {
        super(props);
        var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
        // 初始状态
        this.state = {
            dataSource:dataSource
        };
        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(renderData){
        var tags = [];
        for(var i in renderData.tags){
            if(i>=3){
                break;
            }
            var tag = (
                <Text key={renderData.tags[i].tagName} style={[styles.item_box,styles.font_11]}>{renderData.tags[i].tagName}</Text>
            );
            tags.push(tag);
        }
        return (
            <TouchableHighlight onPress={()=>this.props.goRentHouseDetail()} underlayColor="#eee">
                <View style={[styles.houseContainer]}>
                    <View style={[styles.imageContainer]}>
                        <Image source={{uri:Util.tfsServer+renderData.realImg}} style={[styles.image]}/>
                    </View>
                    <View style={[styles.flex_column,styles.houseContentContainer]}>
                        <View style={[styles.flex_row]}>
                            <Text numberOfLines={1} style={{flex:1}}>{renderData.title}</Text>
                        </View>
                        <View style={[styles.flex_row]}>
                            <Text style={[styles.font12]}>{renderData.room}室{renderData.hall}厅-{renderData.area}㎡-{renderData.floor}/{renderData.floorsum}层</Text>
                        </View>
                        <View style={[styles.flex_row]}>
                            <View style={[styles.flex_row,{flex:1}]}>
                                <Text style={[styles.font_11,styles.flex_row]} numberOfLines={1}>{renderData.position}</Text>
                            </View>
                            <View style={[styles.flex_row,{flex:1.5}]}>
                                <Text style={[styles.font_red]}>{renderData.amounts}元/月</Text>
                            </View>
                        </View>
                        <View style={[styles.flex_row]}>
                            {tags}
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render(){
        return (
            <ListView
                dataSource={this.state.dataSource.cloneWithRows(this.props.rentHouseData)}
                renderRow={this.renderRow}
                onEndReached={()=>this.props.getRentHouses()}
                onEndReachedThreshold={1}
                enableEmptySections = {true}
            />
        )
    }

}

const styles = StyleSheet.create({

    houseContainer:{
        height:(Util.size.height-10)/4,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'#eee',
        flex:1,
        flexDirection:'row',
        paddingBottom:5,
        paddingTop:5
    },
    imageContainer:{
        flex:1,
        marginRight:10
    },
    houseContentContainer:{
        marginLeft:3
    },
    image:{
        height:(Util.size.height-90)/4,
        width:Util.size.width/2-30,
        resizeMode:'stretch'

    },
    flex_column:{
        flex:1.2,
        flexDirection:'column'
    },
    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    item_box:{
        height:20,
        borderColor:'black',
        borderWidth:Util.pixel,
        marginRight:5,
        padding:3
    },
    font_12:{
        fontSize:12
    },
    font_11:{
        fontSize:11
    },
    font_red:{
        color:'red'
    }
});