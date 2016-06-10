import React, {Component} from 'react'
import {
    View,
    ListView,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native'

'use district';

import Util from '../view/utils'
import Header from '../house/Header'
import NewHouse from '../house/new/NewHouse'
import NewCondition from '../house/new/Condition'
import SecondHouse from '../house/second/SecondHouse'
import SecondCondition from '../house/second/Condition'
import RentHouse from '../house/rent/RentHouse'
import RentCondition from '../house/rent/Condition'
import NewHouseDetail from '../house/new/HouseDetail'
import Price from '../house/new/Price'
import Room from '../house/new/Room'
import More from '../house/new/More'


export  default class extends Component{

    static propTypes = {

    };

    // 构造
    constructor(props) {
        super(props);

        var param = {};
        param["cityId"]=10002;

        // 初始状态
        this.state = {
            _currentPage:1,
            _currentTab:'new',
            isArea:false,
            isPrice:false,
            isRoom:false,
            isMore:false,
            priceData:[],
            tagData:[],
            param:param,
            newHouseData:[],
            newHousePageNo:1,
            secondHouseData:[],
            secondPageNo:1

        };
        this.tabChange = this.tabChange.bind(this);
        this.goBack = this.goBack.bind(this);
        this.goNewHouseDetail = this.goNewHouseDetail.bind(this);
        this.selectMenu = this.selectMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.selectPrice = this.selectPrice.bind(this);
        this.selectMore = this.selectMore.bind(this);
        this.selectRoom = this.selectRoom.bind(this);
        this.getNewHouses = this.getNewHouses.bind(this);
        this.getSecondHouses =  this.getSecondHouses.bind(this);
    }

    componentWillMount() {
       this.getBasicCondition();
       this.getNewHouses();
       this.getSecondHouses();
    }

    getNewHouses(){
        const pageNo = this.state.newHousePageNo;
        var url = Util.api+"newHouse/getHouses/?";
        url += "pageNo="+pageNo;
        url += "&pageSize=10";
        url += "&cityId=10002";
        fetch(url).then((response)=>response.json()).then((responseData)=>{
            console.log(responseData);
            var data = this.state.newHouseData.concat(responseData.data);
            this.setState({
                newHousePageNo:pageNo+1,
                newHouseData:data
            });
        })
    }
    getSecondHouses(){
        const pageNo = this.state.secondPageNo;
        var url = Util.api + "secondHouse/getHouses?";
        url += "pageSize=10&cityId=10002&pageNo="+pageNo;
        fetch(url).then((response)=>response.json()).then((responseData)=>{

            var data = this.state.secondHouseData.concat(responseData.data);
            this.setState({
                secondHouseData:data,
                secondPageNo:pageNo+1
            });
        })
    }


    getBasicCondition(){
        var url = Util.api+"/basicCondition/getNewHouseCondition?cityId=10002";
        fetch(url).then((response)=>response.json()).then((responseData)=>{
            this.setState({
                priceData:responseData.prices.data,
                tagData:responseData.tags.data
            })
        });
    }

    tabChange(currentTab){
        var _currentTab = 'new';
        console.log(currentTab);
        if(currentTab=="二手房"){
            _currentTab = "second";
        }else if(currentTab=="租房"){
            _currentTab = "rent";
        }
        this.setState({
            _currentTab:_currentTab
        });
    }
    goBack(){
        this.props.navigator.pop();
    }
    goNewHouseDetail(){

        this.props.navigator.push({
            component:NewHouseDetail,
            title:'新房详情'
        })
    }
    selectMenu(menu){
        if(menu=="isArea"){
            this.setState({
                isArea:!this.state.isArea,
                isPrice:false,
                isRoom:false,
                isMore:false
            });
        }
        if(menu=="isPrice"){
            this.setState({
                isPrice:!this.state.isPrice,
                isArea:false,
                isRoom:false,
                isMore:false
            });
        }
        if(menu=="isRoom"){
            this.setState({
                isRoom:!this.state.isRoom,
                isPrice:false,
                isArea:false,
                isMore:false
            });
        }
        if(menu=="isMore"){
            this.setState({
                isMore:!this.state.isMore,
                isPrice:false,
                isArea:false,
                isRoom:false,
            });
        }
    }

    selectPrice(startAmounts,endAmounts){
        this.closeMenu();
        alert('222');
    }

    selectMore(){
        this.closeMenu();
        alert("more");
    }

    selectRoom(){
        this.closeMenu();
        alert("room");
    }

    closeMenu(){
        this.setState({
            isArea:false,
            isPrice:false,
            isRoom:false,
            isMore:false
        });
    }

    render(){
        console.log(this.state._currentTab);
        if(this.state._currentTab=="new"){
            return (
                <View style={[styles.houseContainer]}>
                    <Header currentTab={this.state._currentTab} tabChange={this.tabChange} goBack={this.goBack} />
                    <NewCondition selectMenu={this.selectMenu}/>
                    <NewHouse goNewHouseDetail={this.goNewHouseDetail} getNewHouses={this.getNewHouses} newHouseData={this.state.newHouseData}/>
                    {
                        this.state.isPrice ?
                            <Price priceData={this.state.priceData} selectPrice={this.selectPrice} closeMenu={this.closeMenu}/>
                            : null
                    }
                    {
                        this.state.isRoom ?
                            <Room selectRoom={this.selectRoom} closeMenu={this.closeMenu}/>
                            : null
                    }
                    {
                        this.state.isMore ?
                            <More tagData={this.state.tagData} selectMore={this.selectMore} closeMenu={this.closeMenu}/>
                            : null
                    }
                </View>
            )
        }else if(this.state._currentTab=="second"){
            return (
                <View style={[styles.houseContainer]}>
                    <Header currentTab={this.state._currentTab} tabChange={this.tabChange} goBack={this.goBack}/>
                    <SecondCondition/>
                    <SecondHouse getSecondHouses={this.getSecondHouses} secondHouseData={this.state.secondHouseData}/>
                </View>
            )
        }else if(this.state._currentTab=="rent"){
            return (
                <View style={[styles.houseContainer]}>
                    <Header currentTab={this.state._currentTab} tabChange={this.tabChange} goBack={this.goBack}/>
                    <RentCondition/>
                    <RentHouse/>
                </View>
            )
        }

    }

}

const styles = StyleSheet.create({

    houseContainer:{
        marginTop:10,
        flex:1
    }
});