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
                        <div className='navButton'id='nb-1'><Link className='navLink' to='/'>Home</Link></div>
                        <div className='navButton'id='nb-2'> <Link className='navLink' to='/about'>About</Link></div>
                        <div className='navButton'id='nb-3'><Link className='navLink' to='/portfolio'>Portfolio</Link></div>
                        <div className='navButton'id='nb-4'><Link className='navLink' to='/blog'>Blog</Link></div>
                        <div className='navButton'id='nb-5'> Contact </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navbar;