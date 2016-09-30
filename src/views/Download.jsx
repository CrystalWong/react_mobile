import React,{Component,PropTypes} from 'react';
import URLS from '../constants/urls';
import {Tool, merged} from '../Tool';
import '../Style/download';

class Download extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="download_bg">
				<a href="{URLS.Download}" title="立即下载" target="_blank" className="download_btn">立即下载</a>
			</div>
		)
	}
}

export default Download;