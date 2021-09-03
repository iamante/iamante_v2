import React from "react";
import Button from "../Button/Button";
import "./Work.css";
import { FaGithub } from "react-icons/fa";
import { WorkData } from "./WorkData";

function Work(props) {
  return (
    <section className="work">
      <div className="img-container">
        <img src={props.image} alt="first work" />
        <svg viewBox="-298 30 470 15">
          <text className="svgStroke" y="50">
            {props.number}
          </text>
          <text y="50">{props.number}</text>
        </svg>
      </div>
      <div className="text-container">
        <span>PORTFOLIO</span>
        <h1>
          <span>{props.title}</span>
        </h1>
        <p>{props.description}</p>
        <code>Main tech used:</code>
        <div className="icon-container">
          <div className="tooltip">
            <img src="/images/icons/laravel.svg" alt="" width="50" />
            <span className="tooltip-icon">Laravel</span>
          </div>
          <div className="tooltip">
            <img src="/images/icons/php.svg" alt="" width="50" />
            <span className="tooltip-icon">Php</span>
          </div>
          <div className="tooltip">
            <img src="/images/icons/mysql.svg" alt="" width="50" />
            <span className="tooltip-icon">MySQL</span>
          </div>
          <div className="tooltip">
            <img src="/images/icons/bootstrap.svg" alt="" width="50" />
            <span className="tooltip-icon">Bootstrap</span>
          </div>
        </div>
        <Button title="Source Code" icon={<FaGithub />} />
      </div>
    </section>
  );
}

export default Work;
