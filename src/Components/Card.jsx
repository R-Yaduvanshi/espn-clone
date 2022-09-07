import React from "react";
import "./CSS/card0230.css";
const Card = ({ info }) => {
  return (
    <div className="main-parent-div">
      <div>
        <span className="span1">{info.dateTimeGMT} &#x2022;</span>
        <span> {info.matchType} &#x2022; Dubai</span>
      </div>
      <div className="parent-child-1">
        <div className="grand-child-1">
          <div className="grand-son1">
            <img src={info.t1img} alt="" className="flag-icon" />
            <p className="team-name">{info.t1}</p>
          </div>
          <div className="grand-son2">
            <p className="team-score">{info.t1s}</p>
          </div>
        </div>
        {/* //First team div end here */}
        <div className="grand-child-1">
          <div className="grand-son1">
            <img src={info.t2img} alt="" className="flag-icon" />
            <p className="team-name">{info.t2}</p>
          </div>
          <div className="grand-son2">
            <p className="team-score">{info.t2s}</p>
          </div>
        </div>
        {/* //2nd team div end here */}
      </div>
      <div className="status-div">
        <p>{info.status}</p>
      </div>
      <div className="report-div">
        <a href="#">Shedule</a>
        <a href="#">Table</a>
        <a href="#">Report</a>
      </div>
    </div>
  );
};

export default Card;
