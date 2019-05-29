import React from "react";
import "./style.css";

function Character(props) {
  return (
    <div className="card col-12 col-md-3" onClick={() => props.handleClick(props.id)} style={{
      height: "50%",
      width: "50%"
    }}>
      <div className="img-container" style={{ objectFit: "cover" }}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Character;
