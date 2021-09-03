import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imgsrc} alt="tech-icon" />
            <p>{props.title}</p>
        </div>
    )
}

export default Card
