 import React from 'react'
import logo from '../logo.svg';
import '../App.css'
import GithubButton from './GithubButton';

import './homepage.css'


const homepage = ( ) =>{

    return (
      <div className='all-page-wrapper'>

        <div className='homepage-wrapper'>
            {/* <h1>HOMEPAGE</h1> */}
            <div className='homepage-text-wrapper'>
              <div className='image-wrapper' >
                {/* <img src='./HomepagePhoto.jpg' className='homepage-photo' alt='logo' /> */}
              </div>
              <p className='homepage-text'>I'm a full stack developer who found a continuous stream of problems 
              to solve. I always found passion where there was an opportunity to solve a 
              difficult problem or to find a way to improve a solution. I always felt like engineering was
               my future because my childhood was full of taking things apart to figure out how they worked 
               and then putting them back together. This is something I do even now but instead of taking 
               things apart, I test different code to try and understand how it works so I can remember and 
               use it later.
              </p>
            </div>
            <div className='github-button-wrapper'>
              <GithubButton text={'My Github Profile'} link={'https://github.com/mjc695'}/>
            </div>
              {/* <h5>This portfolio was create with create-react-app</h5> */}
        </div>
      </div>
    )
}

export default homepage