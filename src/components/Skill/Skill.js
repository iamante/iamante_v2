import React from 'react'
import Card from './Card'
import './Skill.css'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'


function Skill() {
    return (
        <section id="skill" className="skill">
            <div className="skill-text">
                <span>My Skills</span>
                <h1>Expertise</h1>
                <p>Here are some of technologies that i worked with from web development. From front-end & back-end to design.</p>
            </div>
            <div className="card-container">
                <FaChevronLeft className="left-arrow" style={{color: 'white'}}/>
                <FaChevronRight className="right-arrow" style={{color: 'white'}}/>
                <Card title="HTML 5" imgsrc="/images/icons/html.svg"/>
                <Card title="CSS 3" imgsrc="/images/icons/css.svg"/>
                <Card title="JAVASCRIPT" imgsrc="/images/icons/javascript.svg"/>
                <Card title="jQuery" imgsrc="/images/icons/jquery.svg"/>
                <Card title="BOOTSTRAP" imgsrc="/images/icons/bootstrap.svg"/>
                <Card title="SASS" imgsrc="/images/icons/sass.svg"/>
                <Card title="REACT" imgsrc="/images/icons/react.svg"/>
                <Card title="PHP" imgsrc="/images/icons/php.svg"/>
                <Card title="MYSQL" imgsrc="/images/icons/mysql.svg"/>
                <Card title="LARAVEL" imgsrc="/images/icons/laravel.svg"/>
            </div>
        </section>
    )
}

export default Skill
