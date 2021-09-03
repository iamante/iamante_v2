import React from "react";
import Button from "../Button/Button";
import "./Work.css";
import { FaGithub } from "react-icons/fa";

function Work({ id, image, number, title, description, tech }) {
  const hello = tech.map(({ tooltip }) =>
    tooltip.map((x) => x)
  );
  console.log(hello);
  return (
    <section id="work" className="work">
      <div className="img-container">
        <img src={image} alt="first work" />
        <svg viewBox="-298 30 470 15">
          <text className="svgStroke" y="50">
            {number}
          </text>
          <text y="50">{number}</text>
        </svg>
      </div>
      <div className="text-container">
        <span>PORTFOLIO</span>
        <h1>
          <span>{title}</span>
        </h1>
        <p>{description}</p>
        <code>Main tech used:</code>
        <div className="icon-container">
          {
            tech.map(({ tech_icon, tooltip }) =>
              tech_icon.map((x, index) => (
                <div key={index} className="tooltip">
                  <img src={x} alt="" width="50" />
                  <span className="tooltip-icon">{hello}</span>
                </div>
              ))
            )
            // <div className="tooltip">
            //   <img src={x.tech_icon.map((i) => i)} alt="" width="50" />
            //     <span key={id} className="tooltip-icon">
            //       {x.tooltip.map((i) => i)}
            //     </span>
            // </div>
          }
        </div>
        <Button title="Source Code" icon={<FaGithub />} />
      </div>
    </section>
  );
}

export default Work;
