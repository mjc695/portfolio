import React from 'react'

import './FullstackPage.css'

import GithubButton from '../components/GithubButton'

const FullstackPage = () =>{
    return(
        <div className='fullstack-page-wrapper' >
            <h3>Projects Completed at Fullstack Academy</h3>
            <div className='capstone-wrapper' >
                <p className='FSpagetext'>
                    The capstone project was a 2 week project where myself and 3 other students
                    worked together to decide on an idea and fully build our idea. We chose to 
                    create Room8s where you can find a roomate in New York City. You could start 
                    by filling out our questionaire in order to decide where you would want to live
                    or by looking at our map data and deciding which neighborhood is best for you. 
                    You would then fill out a questionaire for roomate preferences and would be matched
                    up with different people in our system.
                </p>
                <a href='https://www.youtube.com/watch?v=HK_MQxwOudw&list=PLx0iOsdUOUmmMdgcWgABSEBRkSWAG3aNP&index=5' target='_blank' rel='noreferrer'> Youtube presentation for this Capstone Project</a>

                <div className='github-button-wrapper'>
                    <GithubButton text={'Room8s'} link={'https://github.com/noisyfairy/room8s'}/>
                </div>
            </div>
            <div className='stackathon-wrapper' >
                <p className='FSpagetext'>
                    Stackathon was a 4 day individual stackathon project. I built a mobile application
                    using React Native where you would be able to save your workout information into a server
                    and be able to look at this information in your history.
                </p>
                <div className='github-button-wrapper'>
                    <GithubButton text={'Noob Fitness'} link={'https://github.com/mjc695/noob-fitness'}/>
                </div>
            </div>
            <div className='mimsymedical-wrapper' >
                <p className='FSpagetext'>
                    Mimsy Medical is an e-commerce website which myself and a group of 3 otherstudents built 
                    within 3 days. This webiste was developed to be a fully functional e-commerce website.
                </p>
                <div className='github-button-wrapper'>
                    <GithubButton text={'Mimsy Medical'} link={'https://github.com/mimsy-virus/grace-shopper'}/>
                </div>
            </div>
        </div>
    )
}

export default FullstackPage