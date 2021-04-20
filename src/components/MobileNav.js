import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import GithubButton from './GithubButton'

const MobileNav = () =>{

    const [navState, setNavState] = useState(false)

    const onClick = () =>{
        setNavState(!navState)
    }

    return(
        !navState?
        <div onClick={onClick}>
            <p>Open Menu</p>
        </div>:

        <div>
            <p onClick={onClick}>Close Menu</p>
            <div className='nav-link-wrapper'>
                <Link className='nav-link' to='/homepage' > HOMEPAGE</Link>
                <Link className='nav-link' to='/fullstack' >fullstack projects</Link>
                <Link className='nav-link' to='/solo' >Solo Projects</Link>
                <Link className='nav-link' to='/aboutme' >About Me</Link>
                <div className='git-link'>
                   <a href='https://github.com/mjc695' target='_blank' rel='noreferrer' ><GithubButton/></a>
                </div>
            </div>
        </div>
    )
}

export default MobileNav