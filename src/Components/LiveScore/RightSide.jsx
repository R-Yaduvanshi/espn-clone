import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import styles from "./Upcoming.module.css";

const RightSide = () => {
  return (
    <>
      <div
        className={styles.adds_box}
        style={{ marginTop: "0px", marginRight: "50px", width: "150px" }}
      >
        <div>
          <div>
            <b>Quike Links</b>
            {/* ************************************************** */}
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span>Zimbabwe v india</span>
                </div>
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> Asia Cup QLF</span>
                </div>
              </a>
            </div>
            {/* ****************************************** */}
            <hr style={{ width: "310px" }} />
            <a href="file:///home/rehana/Desktop/MasaiProject/LiveScore/liveScoreHome.html">
              Desktop Scoreboard
            </a>
            <p style={{ color: "gray" }}>
              A mini Scoreboard that stay with <br />
              you and updates all the current matches
            </p>
            <link
              href="https://www.espncricinfo.com/ci/engine/series/index.html"
              alt="image"
            />
            <h4>Series Archive</h4>
            <link href="https://www.espncricinfo.com/ci/engine/match/index.html?view=calendar" />
            <h4>International calender</h4>
          </div>
        </div>

        <div className={styles.add}>
          <img
            src="https://tpc.googlesyndication.com/simgad/13683194396473605559?"
            alt="adds"
          />
        </div>
        <div className={styles.add1}>
          <img
            src="https://tpc.googlesyndication.com/simgad/13342522690102732645?"
            alt=""
          />
        </div>
      </div>

      {/* ********************************************************* */}
    </>
  );
};

export default RightSide;
