import React from 'react'
import logo from '../logo.svg';
import '../App.css'
import GithubButton from './GithubButton';

import './homepage.css'


const homepage = ( ) =>{

    return (
        <div className='homepage-wrapper'>
            {/* <h1>HOMEPAGE</h1> */}
            <div className='homepage-text-wrapper'>
              <div className='image-wrapper' >
                <img src='./HomepagePhoto.jpg' className='homepage-photo' alt='logo' />
              </div>
              <p className='homepage-text'>Hi, My name is Monferd Collin and this is my portfolio. 
                I am a Fullstack Web developer that has graduated from Fullstack Academy. 
                Use the navigation bar above to see some of the projects that I've worked on. 
                You can also access my github via the navigation or the button below. 
                If you have any questions, you can email me at monferd.j.collin@gmail.com
              </p>
            </div>
            <div className='github-button-wrapper'>
              <GithubButton text={'My Github Profile'} link={'https://github.com/mjc695'}/>
            </div>
              {/* <h5>This portfolio was create with create-react-app</h5> */}
        </div>
    )
}

export default homepage