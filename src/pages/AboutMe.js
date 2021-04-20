import React from 'react'

import './AboutMe.css'

const AboutMe = () =>{
    return(
        <div className='about-me-wrapper'>
            <h3>About Me</h3>
            <p>
            {/* ABOUT ME!! */}
            I'm a problem solver who found a continuous stream of problems to solve as a programmer. 
            I always found passion where there was an opportunity to solve a difficult problem or to 
            find a way to improve a solution. My passion began as a little boy curious about how toys 
            worked. I took these things apart to find out why they worked and later on in life I began 
            to fix the things I broke when I was younger. As I got older, I moved closer to electronics 
            and entering college I found coding. I wasn't able to enter the program because I was  too 
            deep into mechanical engineering so I finished my degree and pursued other passions that I 
            had while keeping programming in mind. As I was learning coding on the side, a spark was lit 
            and I decided it was in my best interest to pursue becoming a full time developer. 
                
            </p>
            <img src='./AboutMePhoto.jpg' className='about-me-photo' alt='./HomepagePhoto'  />
        </div>
    )
}

export default AboutMe