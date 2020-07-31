import React, { useState, useEffect } from "react";
import Logo from "./../Logo";
import jobsToday from "./jobs.json";
import JobDescription from "./../JobDescription";
import "./style.css";

function JoinOurTeam() {
  const [jobs, setJobs] = useState(jobsToday);
  return (
    <div>
      <Logo />
      <div className="container-team">
        <h4>NOW HIRING!</h4>
        <p className="location-description">
          Are you a self-motivated, hardworking, problem-solving go-getter with
          a passion for customer service and a team-oriented approach to work?
          Pay is competitive, hours are sensible, and we pride ourselves on
          serving delicious food at reasonable prices in a warm and welcoming
          environment. Email your resume to{" "}
          <a href="eat@hobnobrva.com">eat@hobnobrva.com</a> or call us at
          804-264-7400, Monday-Saturday, between 10am-2pm.
        </p>
        <hr></hr>
        {jobs.map((jobs) => {
          return <JobDescription data={jobs} />;
        })}

        <div></div>
      </div>
    </div>
  );
}

export default JoinOurTeam;
