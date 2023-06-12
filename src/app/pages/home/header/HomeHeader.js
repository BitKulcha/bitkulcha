import React, { Component } from 'react';
import Nav from './../../../components/nav/Nav';
import HeaderItem from './../../../components/headerItem/HeaderItem';
import './HomeHeader.css';


class HomeHeader extends Component {
    render() {
        return (
            <div className="HomeHeader">
                <Nav></Nav>
                <div className='header-cover'>
                    <div className='header-image'>

                    </div>

                    <div className='header-content'>
                        <HeaderItem></HeaderItem>
                        <HeaderItem></HeaderItem>
                        <HeaderItem></HeaderItem>
                    </div>

                    

                </div>
            </div>
        );
    }
}

export default HomeHeader;
