import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import {Tool, merged} from '../../Tool';
import URLS from '../../constants/urls';
import {COMMON_HEADERS_POST,COMMON_HEADERS} from '../../constants/headers';

/**
 * 公共头部
 * 
 * @export
 * @class Header
 * @extends {Component}
 */
export class Header extends Component {
    render() {
        let {title, leftIcon} = this.props;
        let left = null;

        if (leftIcon === 'fanhui') { //返回上一页
            left = (
                <a onClick={this.context.router.goBack}>
                    <i></i>
                </a>
            );
        }
        return (
            <header className="common-header">
                <div className="left-arrow">
                    {left}
                </div>
                <h2 className="title">{title}</h2>
            </header>
        );
    }
}
Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}


/**
 * 四级地址
 * 
 * @export
 * @class AddressSelect
 * @extends {Component}
 */
 let AddressSelectList = React.createClass({
    // getInitialState() {
    //     return {liked: false};
    // }


  render: function() {
    let {index,id,name,status,selectIndex} = this.props;
    this.callback = ()=>{
        this.props.callback({index: index,name: name,id: id,status: status})
    }
    return (
        <li className={index==selectIndex?"select":""} onClick={this.callback.bind(this)}>{name}</li>
    );
  }
});

export class AddressSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            status: 0,
            index: 0,
            select: "请选择",
            province: "",
            provinceId: "",
            city: "",
            cityId: "",
            country: "",
            countryId: "",
            xz: "",
            xzId: ""
        };
        this.getProvince(this,0);
    }

    getProvince(obj,first){
        if(first != 0){
            this.setState({index: 0,status: 0,select:"请选择",province:"",city:""});
            obj = this;
        }
        Tool.fetch(obj,{
            url: `${URLS.PROVINCE}?containChilds=false`,
            type: "get",
            headers: COMMON_HEADERS,
            successMethod: function(json){
                obj.setState({list: json,status: 0});
            }
        });
    }

    getCity(id,select){
        if(select != 0){id = this.state.provinceId;}
        let self = this;
        Tool.fetch(this,{
            url: `${URLS.CITY}${id}`,
            type: "get",
            headers: COMMON_HEADERS,
            successMethod: function(json){
                self.setState({index: 0,list: json,status: 1,city: "",country: "",xz:""});
            }
        });
    }

    getCountry(id,select){
        if(select != 0){id = this.state.cityId;}
        let self = this;
        Tool.fetch(this,{
            url: `${URLS.COUNTRY}${id}`,
            type: "get",
            headers: COMMON_HEADERS,
            successMethod: function(json){
                self.setState({index: 0,list: json,status: 2,country: "",xz:""});
            }
        });
    }   

    getXz(id,select){
        if(select != 0){id = this.state.xzId;}
        let self = this;
        Tool.fetch(this,{
            url: `${URLS.XZ}${id}`,
            type: "get",
            headers: COMMON_HEADERS,
            successMethod: function(json){
                self.setState({index: 0,list: json,status: 3,xz: ""});
            }
        });        
    } 

    selectItem(data){
        if(data.status == 0){
            this.refs.province.innerText = data.name;
            this.setState({province: data.name,provinceId: data.id,select: "",index: data.index});
            this.getCity(data.id,0);
        }else if(data.status == 1){
            this.refs.city.innerText = data.name;
            this.setState({city: data.name,cityId: data.id,index: data.index});
            this.getCountry(data.id,0);
            console.log(this.state.provinceId);
        }else if(data.status == 2){
            this.refs.country.innerText = data.name;
            this.setState({country: data.name,countryId: data.id,index: data.index});
            this.getXz(data.id,0);
        }else if(data.status == 3){
            this.refs.xz.innerText = data.name;
            this.setState({xz: data.name,xzId: data.id,index: data.index});
            this.props.addressResult({
                provinceId: this.state.provinceId,
                province: this.state.province,
                cityId: this.state.cityId,
                city: this.state.city,
                countryId: this.state.countryId,
                country: this.state.country,
                xzId: data.id,
                xz: data.name
            });
        }
    }

    render() {
        let {_style} = this.props;
        
        return (
            <section className = "cascade-select" style={{WebkitTransform: `translate3d(0,${_style},0)`,transform: `translate3d(0,${_style},0)`}}>
                <header>所在地区<span onClick={this.props.close}>+</span></header>
                <div className="select-value"><span style={{color: "#ff6600"}}>{this.state.select}</span><span ref="province" onClick={this.getProvince.bind(this)}>{this.state.province}</span><span ref="city" onClick={this.getCity.bind(this)}>{this.state.city}</span><span ref="country" onClick={this.getCountry.bind(this)}>{this.state.country}</span><span ref="xz" onClick={this.getXz.bind(this)}>{this.state.xz}</span></div>
                <div className="select-scroll">
                   <ul ref="list">
                   {
                        this.state.list.map((item,index) =>
                            <AddressSelectList key={index} index={index} selectIndex={this.state.index} status={this.state.status} {...item} callback={this.selectItem.bind(this)}/>)
                   }
                   </ul>
                </div>
            </section>
        );
    }
}





/**
 * 底部导航菜单
 * 
 * @export
 * @class Footer
 * @extends {Component}
 */
class FooterInit extends Component {
    render() {
        var myUrl = this.props.User && this.props.User.loginname ? '/user/' + this.props.User.loginname : '/signin';
        var arr = [];
        arr[this.props.index] = 'on';
        return (
            <footer className="common-footer">
                <div className="zhanwei"></div>
                <ul className="menu" data-flex="box:mean">
                    <li className={arr[0]}>
                        <Link to="/">
                            <i className="iconfont icon-shouye"></i>首页
                        </Link>
                    </li>
                    <li className={arr[1]}>
                        <Link to="/topic/create">
                            <i className="iconfont icon-fabu"></i>发表
                        </Link>
                    </li>
                    <li className={arr[2]}>
                        <Link to="/my/messages">
                            <i className="iconfont icon-xiaoxi"></i>消息
                        </Link>
                    </li>
                    <li className={arr[3]}>
                        <Link to={myUrl}>
                            <i className="iconfont icon-wode"></i>我的
                        </Link>
                    </li>
                </ul>
            </footer>
        );
    }
    shouldComponentUpdate(np) {
        return this.props.index !== np.index; //防止组件不必要的更新
    }
}
FooterInit.defaultProps = {
    index: 0
};


var Footer = connect((state) => { return { User: state.User }; }, action('User'))(FooterInit);

export {Footer}