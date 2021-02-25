import React from 'react'
import {Link, Router} from 'react-router-dom'
import logo from './logo.svg'

import './Navbar.css'

const Navbar = () => {

    return(
        <div className='nav-wrapper'>
            <div className='logo-wrapper'>
                <img src={logo} className="app-logo" alt='logo' />
            </div>
            <div className='nav-link-wrapper'>
                <Link className='nav-link' to='/homepage' > HOMEPAGE</Link>
                <Link className='nav-link' to='/nothing' >nothing</Link>
            </div>
        </div>
    )
}

export default Navbar