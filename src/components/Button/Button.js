import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <>
            <button className="btn"><span>{props.icon}</span>{props.title}</button>
        </>
    )
}

export default Button
