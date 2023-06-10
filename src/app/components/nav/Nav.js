import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className='Nav'>
                <div className='logo'>Bitkulcha</div>
                <ul className='nav-cover'>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>About</li>
                    <li className='nav-item'>Projects</li>
                    <li className='nav-item'>Contacts</li>
                </ul>
            </div>
        );
    }
}
  
export default Nav;