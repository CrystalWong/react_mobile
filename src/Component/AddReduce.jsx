import React, {Component, PropTypes} from 'react';
import '../Style/addreduce';
/**
 * @export
 * @class AddReduce
 * @extends {Component}
 */
export class AddReduce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.num,
            color: '#333333'
        };
        console.log(this.props);
        
    }

    reduce(e){
        e.stopPropagation(); 
        e.preventDefault();
        if(this.state.num <= 1){return;}
        this.setState({num: --this.state.num});
        if(this.state.num == 1){this.setState({color: "#999999"});}
        this.props.callback(this.state.num,this.props.index);
    }

    add(e){
        e.stopPropagation(); 
        e.preventDefault();
        this.setState({color: "#333333"});
        this.setState({num: ++this.state.num});
        this.props.callback(this.state.num,this.props.index);
    }

    componentDidMount() {
        if(this.state.num <= 1){
            this.setState({color: "#999999"});
        }
    }

    render() {
        let {num} = this.props;
        return (
            <div className="add-reduce">
                <b onClick={this.reduce.bind(this)} style={{color: this.state.color}} >-</b><b>{this.state.num}</b><b onClick={this.add.bind(this)}>+</b>
            </div>
        );
    }
}