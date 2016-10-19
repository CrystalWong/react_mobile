import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';
import '../Style/setbill';
import Cookie from 'react-cookie';
import {Toast,Confirm} from '../Component/common/Tip';
import {OrderClosed} from './OrderClosed';
import {Tool} from '../Tool';
/**
 * 模块入口
 * 
 * @className SetBill
 * @extends {Component}
 */
class SetBill extends Component {
	constructor(props){
		super(props);
		this.state = {
			addressType:true,
			fptype:"",
			fptype1:"",
			initClass:{
				has:"active",
				noHas:""
			},
			tipContent:"",
			isShowBg:"none",
			isShowSm:"none",
			display:"none",
			fptt:""
		};
		function siblings(o) {
		    var a = [];
		    var p = o.previousSibling;
		    while (p) {
		        if (p.nodeType === 1) {
		            a.push(p);
		        }
		        p = p.previousSibling
		    }
		    a.reverse();var n = o.nextSibling;
		    while (n) {
		        if (n.nodeType === 1) {
		            a.push(n);
		        }
		        n = n.nextSibling;
		    }
		    return a
		}
		this.getFptype = (e) => {
			console.log(e.target.innerHTML)
			e.target.setAttribute("class","active");
			for(let sib of siblings(e.target)){
				sib.setAttribute("class","");
			}
			this.setState({fptype:e.target.getAttribute("data-info")});
			this.state.fptype=e.target.getAttribute("data-info");
			if(this.state.fptype){
				this.setState({isShowBg:"block"});
			}else{
				this.setState({isShowBg:"none"});
			}
			console.log(this.state)
		}
		this.perchange = (e) => {
			//this.state.addressType=Boolean(!this.state.addressType);
			this.setState({addressType:Boolean(!this.state.addressType)});
			//this.setState({fptype:e.target.getAttribute("data-info")});
			this.state.fptype1=e.target.getAttribute("data-info");
			if(e.target.getAttribute("data-info")=="comp"){
				this.setState({isShowSm:"block"});
			}else{
				this.setState({isShowSm:"none"});
			}
			console.log(this.state);
		}
		this.getVal = (e) => {
			//如果是单位发票,抬头不为空
			if(this.state.fptype=="comp"&&this.refs.fptt.value.trim()==""){
				this.setState({tipContent:"抬头不为空",display:"block"});
			}else{
				this.setState({tipContent:"",display:"none"});
				this.setState({fptt:this.refs.fptt.value.trim()});
				Tool.history.push("/orderclosed?fptype="+this.state.fptype+"&fptype1="+this.state.fptype1+"&fptt="+encodeURIComponent(this.refs.fptt.value.trim()));
				//location.href="/orderclosed?fptype="+this.state.fptype+"&fptype1="+this.state.fptype1+"&fptt="+encodeURIComponent(this.refs.fptt.value.trim())
			}
			console.log(this.state);
			
		}
	}
	//toast
    toastDisplay(state){  this.setState({display: state}); }
    render() {
        return (
            <div>
            	<Header title="发票" leftIcon="fanhui" />
                    <div className="setBill">
                    	<div className="fptype">
			              	<h3>
			              		发票类型
			              	</h3>
			              	<div  className="typediv" onClick={this.getFptype.bind(this)}>
			              		<a data-info="" className={this.state.initClass.has}>不需要</a>
			               		<a data-info="0">电子发票</a>
			               		<a data-info="1">纸质发票</a>
			              	</div>
		               </div>
		               <div className="fptype1" style={{display: this.state.isShowBg}}>
			              	<h3>
			              		发票抬头
			              	</h3>
			              	<div className="typediv1">
			              		<a><span data-info="per" className={this.state.addressType ? 'checked' : 'unchecked'} onClick={this.perchange}></span><span>个人</span></a>
			               		<a><span data-info="comp" className={!this.state.addressType ? 'checked' : 'unchecked'} onClick={this.perchange}></span><span>单位</span></a>
			               		<p style={{display: this.state.isShowSm}}><input placeholder="单位名称" type="text" ref="fptt" /></p>
			              	</div>
		               </div>
		               <div className="bootm">
							<a className="confpinfo" onClick={this.getVal}>确定</a>
						</div>
                    </div>
               		<Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} />
            </div>
        );
    }
}
console.log(OrderClosed);
export default SetBill;