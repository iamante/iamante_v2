import React from "react";
import Card from "./Card";
import "./Skill.css";
import { CardData } from "./CardData";
import uuid from "react-uuid";

function Skill() {
  console.log(CardData.map((x) => Object.keys(x).map((x) => x.split(0, 4))));
  return (
    <section id="skill" className="skill">
      <div className="skill-text">
        <span>My Skills</span>
        <h1>Expertise</h1>
        <p>
          Here are some of technologies that i worked with web development. From
          front-end & back-end to design.
        </p>
      </div>
      <div className="card-container">
        {CardData.map((x) =>
          Object.entries(x).map(([name, value]) => (
            <Card key={uuid()} title={name} imgsrc={value} />
          ))
        )}
      </div>
    </section>
  );
}

export default Skill;
