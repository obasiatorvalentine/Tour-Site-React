import React from "react";
import ReviewData from "./ReviewData";
function Review({ index, handleNext, handlePrevious, setIndex, data }) {
  const { id, name, job, image, text } = data[index];
  return (
    <div className="card">
      <div className="image-container">
        <h2>"</h2>
        <img src={image} />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{text}</p>
        <div className="switch-btn">
          <button onClick={handlePrevious}>{"<"}</button>
          <button onClick={handleNext}>{">"}</button>
        </div>
        <button
          onClick={() => {
            setIndex(Math.floor(Math.random() * data.length));
          }}
          className="surprise-btn"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Review;
