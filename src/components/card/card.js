import React from "react";

import "./card.css";

var Card = props => (
  <div className="card">
    <div className="image" style={{ backgroundImage: `url(${props.image})` }} />
    <div className="content">
      <div className="title">{props.title}</div>
      <p className="description">{props.description}</p>
      <button className="btn" onClick={() => props.onClick(props.title)}>
        DONE
      </button>
    </div>
  </div>
);

export default Card;
