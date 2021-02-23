import React from 'react'
import {Link, Router} from 'react-router-dom'

const Navbar = () => {


    return(
        <div>hello nav works
            <Link to='/homepage' > HOMEPAGE</Link>
            <Link to='/nothing' >nothing</Link>
        </div>
    )

}

export default Navbar