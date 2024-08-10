import React from 'react'
import GenericButton from '../components/Button/button'
import './AboutMe.css'

const AboutMe = () =>{
    return(
        <div className='about-me-wrapper'>
            <h3>About Me</h3>
            <p>
            {/* ABOUT ME!! */}
            I'm a full stack developer who found a continuous stream of problems to solve.
            I always found passion where there was an opportunity to solve a difficult problem or to 
            find a way to improve a solution. My passion began as a little boy curious about how toys 
            worked. I took these things apart to find out why and how they worked. As I got older, I moved 
            on to electronics and after entering college I found coding. A spark was lit and after college, 
            I complelted Fullstack Academy and started building apps. 
            </p>
            {/* <img src='./AboutMePhoto.jpg' className='about-me-photo' alt='./HomepagePhoto'  /> */}
            <GenericButton typeofbutton='1' text='Resume' link='/Monferd_Collin_Resume.pdf'  />
            {/* helo not working */}
        </div>
    )
}

export default AboutMe