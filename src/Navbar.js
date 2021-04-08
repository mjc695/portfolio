import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.svg'
import GithubButton from './components/GithubButton'

import './Navbar.css'

const Navbar = () => {

    return(
        <div className='nav-wrapper'>
            <div className='logo-wrapper'>
                <Link to='/homepage'  >
                <img src={logo} className="app-logo" alt='logo' />
                </Link>
            </div>
            <div className='nav-link-wrapper'>
                <Link className='nav-link' to='/homepage' > HOMEPAGE</Link>
                <Link className='nav-link' to='/fullstack' >fullstack projects</Link>
                <Link className='nav-link' to='/solo' >Solo Projects</Link>
                <div className='git-link'>
                    <a href='https://github.com/mjc695' target='_blank' rel='noreferrer' ><GithubButton/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar