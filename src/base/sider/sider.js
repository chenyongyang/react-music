import React, { Component } from 'react'
import classNames from "classnames";
import './sider.scss'

class sider extends Component {

    handleClose = () => {
        this.props.onOpen(false)
    };

    render() {
        const { className, issider } = this.props;
        return (
            <div className={classNames('sider', { 'sider-open': issider })}>
                <div className={`sider-content ${className}`}>
                    {this.props.children}
                </div>
                <div className="sider-sidebar">
                    我是侧边栏
                </div>
                <div className="sider-overlay" onClick={this.handleClose} />
            </div>
        )
    }
}
export default sider