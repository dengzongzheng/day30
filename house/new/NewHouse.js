import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ListView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native'

'use district';

import Util from '../../view/utils'
import HouseDetail from './HouseDetail'

export default class extends Component{

    static propTypes = {

    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        const dataSource = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
        this.state = {
            isPrice:false,
            newHouseData:[],
            dataSource:dataSource,
            pageNo:1
        };
        this.renderRow = this.renderRow.bind(this);
        this.getHouses = this.getHouses.bind(this);
    }

    componentDidMount() {
        if(this.state.newHouseData.length==0){
            this.getHouses();
        }
    }

    getHouses(){
        const pageNo = this.state.pageNo;
        var url = Util.api+"newHouse/getHouses/?";
        url += "pageNo="+pageNo;
        url += "&pageSize=10";
        url += "&cityId=10002";
        fetch(url).then((response)=>response.json()).then((responseData)=>{
            console.log(responseData);
            var data = this.state.newHouseData.concat(responseData.data);
            this.setState({
                pageNo:pageNo+1,
                dataSource:this.state.dataSource.cloneWithRows(data),
                newHouseData:data
            });
        })
    }



    renderRow(renderData){
       var tags = [];
       for(var i in renderData.tags ){
           var tag = (
               <Text key={renderData.tags[i].tagName} style={[styles.text_box]}>{renderData.tags[i].tagName}</Text>
           );
           tags.push(tag);
       }
       return (
           <TouchableOpacity onPress={()=>{this.props.goNewHouseDetail()}} underlayColor="#eee">
               <View style={[styles.newHouse]}>
                   <View style={[styles.houseImageContainer]}>
                       <Image source={{uri:Util.tfsServer+renderData.realImg}} style={[styles.houseImage]}/>
                   </View>
                   <View style={[styles.houseContentContainer]}>
                       <View style={[styles.box_row]}>
                           <View style={{flex:0.8,flexWrap:'nowrap',alignItems:'flex-start'}}><Text numberOfLines={1}>{renderData.title}</Text></View>
                           <View style={{flex:1.5}}><Text style={[styles.font13,styles.font_red]}>{renderData.averagePrice}元/㎡</Text></View>
                       </View>
                       <View style={[styles.box_row]}>
                           <View style={{flex:0.8,flexWrap:'nowrap'}}><Text numberOfLines={1} style={[styles.font13]}>{renderData.position}</Text></View>
                           <View style={{flex:1.5}}><Text style={[styles.font12]}>{renderData.area}㎡</Text></View>
                       </View>
                       <View style={[styles.box_row]}>
                           {tags}
                       </View>
                       <View style={[styles.box_row]}>
                           <Text style={[styles.font12,{color:'black'}]}>{renderData.ecCoorperate}</Text>
                       </View>
                   </View>
               </View>
           </TouchableOpacity>
       );
    }

    render(){
        return(
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    initialListSize={10}
                    pageSize={10}
                    onEndReachedThreshold={1}
                    onEndReached={this.getHouses}
                />
        );

    }
}

const styles = StyleSheet.create({

    newHouse:{
        flex:1,
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        height:(Util.size.height-85)/4,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'#eee'
    },
    houseImageContainer:{
        flex:1,
        flexDirection:'row',
        paddingTop:3,
        paddingLeft:3,
        paddingRight:3
    },
    houseContentContainer:{
        flex:1,
        flexDirection:'column',
        paddingTop:3,
        paddingLeft:3,
        paddingRight:3
    },
    houseImage:{
        height:(Util.size.height-120)/4-10,
        width:Util.size.width/2-15,
        resizeMode:'stretch'
    },
    box_row:{
        flex:1,
        flexDirection:'row',
        height:((Util.size.height-120)/4-10)/2
    },
    font13:{
        fontSize:13
    },
    font_red:{
        color:'red'
    },
    font12:{
        fontSize:12,
        color:'#eee'
    },
    text_box:{
        fontSize:12,
        borderWidth:Util.pixel,
        borderColor:'black',
        height:20,
        padding:3,
        marginRight:1
    }

});