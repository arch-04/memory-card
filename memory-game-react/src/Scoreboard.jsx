import React from "react";
import "./scoreboard.css"

function scoreBoard( {currentScore, bestScore } ){
    

    return (
        <div className="score-board">
            <h1>Best score: {bestScore}</h1>
            <h1>Current score: {currentScore}</h1>
        </div>
    );
}

export default scoreBoard;