import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import "fontsource-bebas-neue"
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <header id='header'>
                <div id='navbar'> {/* Header Container*/}
                    <div id='title-container'> 
                        Johnson Kow
                    </div>
                    <nav id='nav-links'> {/* Links Container */}
                        <div className='navButton'><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></div>
                        <div className='navButton'> About </div>
                        <div className='navButton'> Portfolio </div>
                        <div className='navButton'> Blog </div>
                        <div className='navButton'> Contact </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navbar;