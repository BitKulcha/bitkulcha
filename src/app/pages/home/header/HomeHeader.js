import React, { Component } from 'react';
import Nav from './../../../components/nav/Nav';
import './HomeHeader.css';


class HomeHeader extends Component {
    render() {
        return (
            <div className="HomeHeader">
                <Nav></Nav>
            </div>
        );
    }
}

export default HomeHeader;
