import React from 'react'
import {Link} from 'react-router-dom'
import {BrowserView, MobileView} from 'react-device-detect'

import GithubButton from './components/GithubButton'

import './Navbar.css'
import MobileNav from './components/MobileNav'

const Navbar = () => {

    return(
        <div className='nav-wrapper'>
            <BrowserView>
                <div className='nav-link-wrapper'>
                    <Link className='nav-link' to='/' > HOMEPAGE</Link>
                    <Link className='nav-link' to='/aboutme' >About Me</Link>
                    <Link className='nav-link' to='/engineering' >Software Engineering</Link>
                    <Link className='nav-link' to='/photography' >photography</Link>
                    {/* <Link className='nav-link' to='/solo' >Solo Projects</Link> */}
                    <div className='git-link'>
                        <GithubButton/>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <MobileNav />
            </MobileView>
        </div>
    )
}

export default Navbar