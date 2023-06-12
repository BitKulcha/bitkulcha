import React, { Component } from 'react';
import HomeHeader from './header/HomeHeader';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <HomeHeader></HomeHeader>
                <div className='body'>
                Why Choose Us
                </div>
            </div>
        );
    }
}

export default Home;
