import React from "react";
import Button from "../Button/Button";
import "./Work.css";
import { FaGithub, FaFigma } from "react-icons/fa";
import uuid from "react-uuid";

function Work({
  image,
  number,
  title,
  description,
  tech,
  github_url,
  figma_url,
}) {
  return (
    <section id="work" className="work">
      <div className="img-container">
        <img src={image} alt="first work" />
        <svg width="100%" height="100%" viewBox="0 0 300 300">
          <text
            className="svgStroke"
            dominantBaseline="hanging"
            textAnchor="end"
            x="100%"
            y="3"
          >
            {number}
          </text>
          <text dominantBaseline="hanging" textAnchor="end" x="100%" y="3">
            {number}
          </text>
        </svg>
      </div>
      <div className="text-container">
        <h3>PORTFOLIO</h3>
        <h1>
          {title.split("\n").map((x, index) => (
            <span key={index}>{x}</span>
          ))}
        </h1>
        <p>{description}</p>
        <code>Main tech used:</code>
        <div className="icon-container">
          {tech.map((x) =>
            Object.entries(x).map(([key, value]) => (
              <div key={uuid()} className="tooltip">
                <img src={value} alt="" width="50" />
                <span className="tooltip-icon">{key}</span>
              </div>
            ))
          )}
        </div>
        <div className="btn-container">
          {figma_url ? (
            <Button title="Mockups" icon={<FaFigma />} url={figma_url} />
          ) : null}
          <Button title="Source Code" icon={<FaGithub />} url={github_url} />
        </div>
      </div>
    </section>
  );
}

export default Work;
