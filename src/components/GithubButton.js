import React from 'react'

import './GithubButton.css'

const GithubButton = ({link, text}) =>{


    console.log('link:', link)
    return(
        <div className='button-wrapper' >
            <button className='githubButton'>
            <img src='./GitHubLogo.png' className='githubLogo' alt='logo' />
             {text} {link}
            </button>
        </div>
    )
}

export default GithubButton