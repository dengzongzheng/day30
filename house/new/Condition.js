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


var data ={
    "tags": {
        "tableName": "new_house_tag",
        "isUpdate": "true",
        "updateTime": "2015-09-09 23:46:50",
        "data": [
            {
                "code": "1",
                "name": "团购"
            },
            {
                "code": "2",
                "name": "南北通透"
            },
            {
                "code": "3",
                "name": "精装修"
            },
            {
                "code": "4",
                "name": "交通便利"
            },
            {
                "code": "5",
                "name": "邻铁楼盘"
            },
            {
                "code": "6",
                "name": "明厨明卫"
            },
            {
                "code": "7",
                "name": "品牌地产"
            },
            {
                "code": "8",
                "name": "不限购"
            },
            {
                "code": "9",
                "name": "全朝南"
            },
            {
                "code": "10",
                "name": "小户型"
            },
            {
                "code": "11",
                "name": "低总价"
            },
            {
                "code": "28",
                "name": "教育类"
            },
            {
                "code": "29",
                "name": "LOFT"
            },
            {
                "code": "30",
                "name": "现房"
            },
            {
                "code": "31",
                "name": "开间"
            }
        ]
    },
    "prices": {
        "tableName": "price",
        "isUpdate": "true",
        "updateTime": "2016-04-14 18:36:05",
        "data": [
            {
                "startAmounts": "0",
                "endAmounts": "10000",
                "text": "10000以下"
            },
            {
                "startAmounts": "10000",
                "endAmounts": "15000",
                "text": "10000-15000"
            },
            {
                "startAmounts": "15000",
                "endAmounts": "20000",
                "text": "15000-20000"
            },
            {
                "startAmounts": "20000",
                "endAmounts": "30000",
                "text": "20000-30000"
            },
            {
                "startAmounts": "30000",
                "endAmounts": "40000",
                "text": "30000-40000"
            },
            {
                "startAmounts": "40000",
                "endAmounts": "0",
                "text": "40000以上"
            }
        ]
    },
    "renovations": {
        "tableName": "new_house_renovation",
        "isUpdate": "true",
        "updateTime": "2016-04-14 18:34:52",
        "data": [
            {
                "code": "01",
                "name": "毛坯"
            },
            {
                "code": "02",
                "name": "简装修"
            },
            {
                "code": "03",
                "name": "中等装修"
            },
            {
                "code": "04",
                "name": "精装修"
            },
            {
                "code": "05",
                "name": "豪华装修"
            }
        ]
    },
    "propertyTypes": {
        "tableName": "new_house_ropertyType",
        "isUpdate": "true",
        "updateTime": "2016-04-14 18:34:52",
        "data": [
            {
                "code": "01",
                "name": "公寓"
            },
            {
                "code": "02",
                "name": "别墅"
            },
            {
                "code": "03",
                "name": "住宅"
            },
            {
                "code": "04",
                "name": "商铺"
            },
            {
                "code": "05",
                "name": "写字楼"
            },
            {
                "code": "06",
                "name": "厂房"
            },
            {
                "code": "07",
                "name": "综合体"
            },
            {
                "code": "08",
                "name": "商住两用"
            },
            {
                "code": "09",
                "name": "四合院"
            },
            {
                "code": "10",
                "name": "平房"
            },
            {
                "code": "11",
                "name": "经济适用房"
            },
            {
                "code": "12",
                "name": "两限房"
            },
            {
                "code": "13",
                "name": "公租房"
            },
            {
                "code": "14",
                "name": "安居房"
            },
            {
                "code": "15",
                "name": "自住型商品房"
            },
            {
                "code": "16",
                "name": "其他"
            }
        ]
    }
};

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