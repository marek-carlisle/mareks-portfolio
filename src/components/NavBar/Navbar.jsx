import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

class Navbar extends Component {
    render() {
        return (
            <div id='navBar'>

                <ul className='navBarLinkList'>
                    <li className='navBarLinkItem'>
                        <Link className='navBarLink' to='/home'>Home</Link>
                    </li>

                    <li className='navBarLinkItem'>
                        <Link className='navBarLink' to='/portfolio'>Portfolio</Link>
                    </li>

                    <li className='navBarLinkItem'>
                        <Link className='navBarLink' to='contact'>Contact</Link>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Navbar; 