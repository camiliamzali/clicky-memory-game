import React from 'react';


function Score(props) {
  return (
    <div className="bg-dark text-light text-center row justify-content-around">
      <h2>Current Score:
        <span> {props.score}</span>
      </h2>
      <h2>High Score:
        <span> {props.highScore}</span>
      </h2>
    </div>
  )
}

export default Score;