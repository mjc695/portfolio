import React from 'react'

import './SoloPage.css'

import GithubButton from '../components/GithubButton'

const SoloPage = () =>{
    return(
        <div className='solo-page-wrapper'>
            <h3>Solo Projects</h3>
            <p className='solo-page-text'>This is the page for my solo projects that I've done on my own since
                graduating from Fullstack Academy.
            </p>
            <div>
            <p className='solo-page-text'>
                Put project picture here with link.
            </p>
            <p className='solo-page-text'>
                The first project I've completed is something I worked on while doing a course
                as a refresher from Udemy. It is an e-commerce website with a working cart and checkout.
                I built this to update my knowledge on React and learn 
                how to use react hooks. I also learned how to incorporate firebase into my app.
                
            </p>
            <div className='github-button-wrapper'>
                <GithubButton text={'Crown Clothing'} link={'https://github.com/mjc695/crwn-clothing'}/>
            </div>
            </div>
            <p className='solo-page-text'>
                This project is my productivity app which I made so I can log my productivity
                while studying to get a job in the industry. This is proejct is still in early stages and you can see
                my current progress below. There is a react native portion and a front end. The database
                is on Firebase as well as all the login capabilities. 
            </p>
            <div className='github-button-wrapper'>
                <GithubButton text={'React Native Portion'} link={'https://github.com/mjc695/Stopwatch-App'}/>
            </div>
            <div className='github-button-wrapper'>
                <GithubButton text={'Website Portion'} link={'https://github.com/mjc695/webStopWatch'}/>
            </div>
        </div>
    )

}

export default SoloPage