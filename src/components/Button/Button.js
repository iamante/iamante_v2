import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
      <a href={props.url} target="_blank" rel="noreferrer">
        <button className="btn" type={props.submit}>
          <span>{props.icon}</span>
          {props.title}
        </button>
      </a>
    </>
  );
}

export default Button;
