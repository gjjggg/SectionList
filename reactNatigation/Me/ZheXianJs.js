/**
 * Created by guohongan on 2017/8/10.
 */
/**
 * Created by guohongan on 2017/8/8.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    SectionList,
    TouchableOpacity,
} from 'react-native';

export default class dingdanCell extends Component {

    static  defaultProps = {

        selectedHeader:React.PropTypes.object,
        foderSection:React.PropTypes.object,
        data: [

            {
                "title": "品牌", 'id': '123',
                "data": [
                    {"thumb": "白色AHO-EFR-WDT-00208"},
                    {"thumb": "草绿AHO-EFR-WDT"},
                    {"thumb": "FR-WDT-00208"}
                ]

            },


            {
                "title": "颜色",
                'id': '3',
                "data": [
                    {"thumb": "共色是客户端"},
                    {"thumb": "是滴是滴就-EFR-WDT"},
                    {"thumb": "撒大家打肯德基0208"}
                ]
            }

        ]
    }
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            datSouce:[],
            floderArr:React.PropTypes.object
        };
      }

    componentDidMount() {
       let dataaa = [];
         for (let i=0;i<10 ;i++){
             let dic = {};
             let data = [];
             dic.titled = `${i}分组`
             let string = `${i}同学`
             data.push(
                 string
             )
             dic.datad = data
             dic.foodeSec="0"
             dataaa.push(
                 dic
             )
         }
         let foodeSec=[];
        for (let i=0;i<10 ;i++) {

            foodeSec.push(0)

        }

         this.setState({
             datSouce:dataaa,
             floderArr:foodeSec,
         })

    }
    _renderTableHeader=()=>{
        return(
          <View style={styles.tableHeader}>

          </View>

        )
    }
    _renderItem=()=>{
        return(
          <View style={styles.itemCell}>

          </View>

        )
    }
    _sectionHeaderOnPrss=(inde)=>{
        console.log(inde)

        var foodeSe ="0";
        if (this.state.datSouce[inde].foodeSec === "0"){
            foodeSe ="1"
        }
        if (this.state.datSouce[inde].foodeSec == "1"){
            foodeSe ="0"
        }

        let alldata = this.state.datSouce
        alldata.forEach((value,index)=>{
            if(index === inde) {
                value.foodeSec=foodeSe
            }

        });
        console.log(alldata)
        this.setState({
            datSouce:alldata,

        })

    }
    _renderSectionHeader=({section})=>{

        let inde = parseInt(section.key)-1
       let  aa = this.state.datSouce[inde].foodeSec==="0" ?require('../images/arrow_fold.png'):require('../images/arrow_spread.png')
//   parseFloat
       return(
         <View style={styles.sectionHeader} >
             <TouchableOpacity style={styles.quanXuanImage} onPress={()=>this._sectionHeaderOnPrss(inde)}>
                 <Image  source={aa} style={styles.quanXuanImage}/>
             </TouchableOpacity>
         </View>
       )
    }
    render() {
        return (

          this.state.datSouce.length>0?
            <SectionList
            style={styles.container}
            ListHeaderComponent = {() => this._renderTableHeader()}
            renderSectionHeader={this._renderSectionHeader}
            renderItem = {this._renderItem}
            sections = {[
                {key:'1',data:this.state.datSouce[0].foodeSec==="0"?[]:this.state.datSouce[0].datad},
                {key:'2',data:this.state.datSouce[1].foodeSec==="0"?[]:this.state.datSouce[1].datad},
                {key:'3',data:this.state.datSouce[2].foodeSec==="0"?[]:this.state.datSouce[2].datad}
            ]}
            />
           :null

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT,
    },
    imageDingDanStyle: {
        marginTop:44/2,
        marginLeft:54/2,
        height:36/2,
        width:36/2,
        resizeMode:Image.resizeMode.contain

    },
    quanXuanImage: {
        height:35/2,
        width:35/2,
        marginLeft:10,


    },
    itemCell:{
        width:SCREEN_WIDTH,
        height:40,
        backgroundColor:'#f6dfaa'

    },
    sectionHeader:{
        width:SCREEN_WIDTH,
        height:50,
        backgroundColor:'#64adfa',
        justifyContent:'center',
        alignItems:'center'
    },
    tableHeader: {
      width:SCREEN_WIDTH,
        height:100,
        backgroundColor:'red'
    },
});