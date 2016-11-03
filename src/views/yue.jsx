import React, {Component, PropTypes} from 'react';
import cookie from 'react-cookie';
import {Header,AddressSelect} from '../Component/common/index';
import {Toast} from '../Component/common/Tip';
import {COMMON_HEADERS_POST} from '../constants/headers';
import '../Style/yue';
import {Tool, merged} from '../Tool';
import URLS from '../constants/urls';


/**
 * 模块入口
 * 
 * @class Yue
 * @extends {Component}
 */
class Yue extends Component {
    constructor(props){
      super(props);
      this.state = {
        tipContent: '',
        display: '',
        addressSelectStyle: "100%",
        provinceId: "",
        province: "",
        cityId: "",
        city: "",
        countryId: "",
        country: "",
        xzId: "",
        xz: "",
        codeText: "获取验证码",
        background: "#f60",
        title: "预约"
      };
    }

    goYue(){
        let address = this.refs.address.value,
          detail = this.refs.detail.value,
          name = this.refs.name.value,
          phone = this.refs.phone.value,
          code = this.refs.code.value,
          self = this;
        if(!address){
          this.setState({tipContent : '请选择服务区域',display : 'toasts' });return;
        }
        if(!detail){
          this.setState({tipContent : '请输入门牌号',display : 'toasts' });return;
        }
        if ("" == name || !/[\u4e00-\u9fa5|a-z|A-Z]/.test(name)){
          this.setState({tipContent : '请输入汉字或英文字母姓名',display : 'toasts' });return;
        }
        if (!/^[1][3-9][0-9]{9,9}$/.test(phone)){
          this.setState({tipContent : '请输入正确手机号码',display : 'toasts' });return;
        }
        if(!code){
          this.setState({tipContent : '请输入验证码',display : 'toasts' });return;
        }


        var data = {
            userName: "",
            userId: cookie.load("userId"),
            userPhone: "",
            remark: this.refs.remark.value,
            address: (this.state.provinceId+":"+this.state.province+","+this.state.cityId+":"+this.state.city+","+this.state.countryId+":"+this.state.country+","+this.state.xzId+":"+this.state.xz),
            community: this.state.xz,
            doorNum: detail,
            identifyCode: code,
            contactUserName: name,
            contactUserPhone: phone,
            groupId: this.magicGoodsId,
            groupName: this.nameParams,
            groupSpec: "",
            // groupBizType: "",
            skuId: this.showClassId?this.showClassId:"94",
            skuName: this.nameParams,
            skuSpec: "",
            identifyType: this.identifyType,
            source: "app",
            sourceFlag: "",
            remark: this.refs.remark.value
            // managerId: "",
            // butlerId: ""
        };
              
        let headers = COMMON_HEADERS_POST();
        Tool.fetch(this,{
                  url: `${URLS.YUYUE}`,//提交地址
                  type: "post",
                  headers: headers,
                  body: JSON.stringify(data),
                  successMethod: function(json,status){
                    let tip = "";
                    console.log(json);
                    if(status == 200){
                        tip = "预约成功";
                    }else {
                        tip = json.message;
                    }
                    self.setState({tipContent : (tip?tip:"提交失败"),display : 'toasts' });
                  }
              });
    }

    //toast
    toastDisplay(state){this.setState({display: state}); }

    closeAddress(){
      this.setState({addressSelectStyle: "100%"});
    }

    addressSelect(){
      this.setState({addressSelectStyle: "0"});
    }

    addressResult(data){//获取四级地址结果
      this.setState({
        addressSelectStyle: "100%",
            provinceId: data.provinceId,
            province: data.province,
            cityId: data.cityId,
            city: data.city,
            countryId: data.countryId,
            country: data.country,
            xzId: data.xzId,
            xz: data.xz
      });
    }

    getCode(){//获取验证码
        let headers = COMMON_HEADERS_POST('Accept','application/json'),
          phone = this.refs.phone.value
          self = this;

        if (!/^[1][3-9][0-9]{9,9}$/.test(phone)){
          this.setState({tipContent : '请输入正确手机号码',display : 'toasts' });return;
        }

        Tool.fetch(this,{
                  url: `${URLS.YUYUECODE}${phone}`,//提交地址
                  type: "get",
                  headers: headers,
                  successMethod: function(json,status){
                    if(status == 200){
                      self.identifyType = json.identifyType;
                      var count = 60;
                      self.inte = setInterval(function(){
                        count--;
                        if(count == 0){
                            clearInterval(self.inte);
                            self.setState({codeText: '获取验证码',background: "#f60"});
                        }else{
                            self.setState({codeText: '获取验证码('+count+')',background: "#ccc"});
                        }
                      },1000);
                    }
                  }
              });
    }

    componentDidMount(){
      var search = location.href.split("?")[1];
      search = search?search.split("&"):[];
      console.log(search);
      for(var item of search){
          if(item.split("=")[0] == "showClassId"){
            this.showClassId = item.split("=")[1];
            if(this.showClassId.split("_").length > 1){
                this.magicGoodsId = this.showClassId.split("_")[1];
                this.showClassId = this.showClassId.split("_")[0];
            }
          } else if(item.split("=")[0] == "name"){
            this.nameParams = decodeURIComponent(item.split("=")[1]);
            this.setState({title: this.nameParams});
          }
      }
    }

    render() {
        return (
            <div className="yue">
                <Header title={this.state.title} leftIcon="fanhui" />
                <section>
                  <div className="main">
                    <div className="addren">
                      <ul>
                        <li id = "area_select">
                          <input type="text" ref="address" placeholder="请选择服务区域" autoComplete="off" value={`${this.state.province}${this.state.city}${this.state.country}${this.state.xz}`} readOnly="readonly" onClick={this.addressSelect.bind(this)} />
                          <a href = "javascript:"><span className="chose"></span></a>
                        </li>
                        <li>
                          <input type="text" ref="detail" placeholder="详细楼栋门牌号" autoComplete="off" />
                        </li>
                        <li>
                          <input type="text" ref="name" placeholder="联系人姓名" autoComplete="off" />
                        </li>
                        <li>
                          <input type="number" ref="phone" placeholder="手机号码" autoComplete="off" />
                        </li>
                        <li className="identifyCode">
                          <input type="text" ref="code" placeholder="输入验证码" autoComplete="off" />
                          <button onClick={this.getCode.bind(this)} style={{background: this.state.background}}>{this.state.codeText}</button>
                        </li>
                        <li className="none">
                          <input type="text" ref="remark" placeholder="备注   服务时间、要求" autoComplete="off" />
                        </li>
                      </ul>
                    </div>
                    <a className="yue-but" style={{cursor: 'pointer'}} onClick={this.goYue.bind(this)}>立即预约</a> </div>
                </section>
                <Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} />
                <AddressSelect _style={this.state.addressSelectStyle} close = {this.closeAddress.bind(this)} addressResult={this.addressResult.bind(this)} />
                <div className="mask" style={{display: this.state.addressSelectStyle=="0"?"block":"none"}}></div>
            </div>
        );
    }
}

export default Yue;