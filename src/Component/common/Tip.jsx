import React, {Component, PropTypes} from 'react';

/**
 * @export
 * @class Toast
 * @extends {Component}
 */
export class Toast extends Component {

    render() {
        let {content, display} = this.props;
        if(display=="toasts")display = "toast "+display;
        return (
            <div className={display} ref="toast">
                <div className = 'toast-out'><div className = 'toast-in'>{content}</div></div>
            </div>
        );
    }

    componentDidMount() {
        let self = this;
        this.refs.toast.addEventListener('webkitAnimationEnd', function(){
            self.props.callback('toast');
        }, false);
    }
}

/**
 * @export
 * @class Confirm
 * @extends {Component}
 */
export class Confirm extends Component {

    render() {
        let {title,content,leftText,rightText,display,leftMethod,rightMethod} = this.props;
        
        return (
            <div className="confirm" ref="confirm" style={{display: display}}>
                <header>{title}</header>
                <div className="content">{content}</div>
                <div className="button">
                    <span onClick={leftMethod}>{leftText}</span><span onClick={rightMethod}>{rightText}</span>
                </div>
            </div>
        );
    }
}