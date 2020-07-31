import React from "react";
import "./style.css";

function JobDescription(props) {
  return (
    <>
      <div className="description-unit">
        <div className="job-title">{props.data.title}</div>
        <div className="job-description">{props.data.description}</div>
      </div>
    </>
  );
}

export default JobDescription;
