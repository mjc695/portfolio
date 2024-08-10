import React from 'react'
import './button.css'

const GenericButton = ({typeofbutton, text, link}) =>{
    console.log (typeofbutton, text, link)
    if (typeofbutton==='4'){   
        return(
            <button className="btn btn-3 hover-border-4">
                <span>{text}</span>
            </button>
    )} else {
        return (
            <a href={link} target="_blank">
                <button className="btn btn-3 hover-border-3">
                    <span>{text}</span>
                </button>
            </a>
        )
    }
}

export default GenericButton