import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './header.scss'

const Header = (props) => {
    const showHeader = /music|discover|video/.test(props.location.pathname);
    const open = function headerOpenDrawer() {
        props.onOpen(true);
    };
    if (showHeader) {
        return (
            <header className="header">
                <div className="header-left" onClick={open} />
                <div className="header-title">
                    <NavLink className="mm-header-item music" to="/music"/>
                    <NavLink className="mm-header-item discover" to="/discover" />
                    <NavLink className="mm-header-item video" to="/video"/>
                </div>
                <div className="header-right" />
            </header>
        )
    } else {
        return null
    }
};
export default withRouter(Header)