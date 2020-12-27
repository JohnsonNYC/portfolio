import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "fontsource-bebas-neue"
import './Navbar.css'

class Navbar extends Component {

    tabletResponsive = () => {
        var x = document.getElementById("nav-links");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
        console.log(x)
    }


    render() {
        return (
            <header id='header'>
                <div id='navbar'>
                    <div id='title-container'>
                        Johnson Kow
                    </div>
                    <nav className='topnav' id='nav-links'>
                        <div className='navButton' id='nb-1'><Link className='navLink' to='/'>Home</Link></div>
                        <div className='navButton' id='nb-2'><Link className='navLink' to='/about'>About</Link></div>
                        <div className='navButton' id='nb-3'><Link className='navLink' to='/portfolio'>Portfolio</Link></div>
                        <div className='navButton' id='nb-4'><Link className='navLink' to='/blog'>Blog</Link></div>
                        <div className='navButton' id='nb-5'><Link className='navLink' to='/contact'> Contact </Link></div>

                        <div href={void(0)} className="icon" onClick={this.tabletResponsive}>
                            <i className="fa fa-bars"></i>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navbar;

