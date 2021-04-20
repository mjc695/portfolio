import React from 'react'

import './GithubButton.css'

const GithubButton = ({link='https://github.com/mjc695', text}) =>{


    console.log('link:', link)
    return(
        <div className='button-wrapper' >
            <a href={link} target='_blank' rel='noreferrer' >
                <button className='githubButton'>
                <p className='button-text'>{text}</p>
                <img src='./GitHubLogo.png' className='githubLogo' alt='logo' />
                </button>
            </a>
        </div>
    )
}

export default GithubButton
