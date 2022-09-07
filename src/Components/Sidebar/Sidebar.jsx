import React from "react";
import styles from "./Sidebar.module.css";
import { FiArrowRightCircle } from "react-icons/fi";



const Sidebar = () => {
  return (
    <div>
      {/* <h3>SIDEBAR</h3> */}

      <div className={styles.sidebar}>
        <div>
          {/* ********************************************************************************* */}
          <div className={styles.CatHeading} style={{ marginTop: "10px" }}>
            Key Series
          </div>

          <div>
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
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> Asia Cup</span>
                </div>
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> England v South Africa</span>
                </div>
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> West Indies v New Zealand</span>
                </div>
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> Australia v Zimbabwe</span>
                </div>
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> The Hundred (M)</span>
                </div>
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> The Hundred (W)</span>
                </div>
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> Country Div1</span>
                </div>
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> Country Div2</span>
                </div>
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> 6IXTY (M)</span>
                </div>
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> 6IXTY (W)</span>
                </div>
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> Womenn's championship</span>
                </div>
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> World Test Championship</span>
                </div>
              </a>
            </div>
            <div>
              <a className="active" href="#home">
                <div className={styles.filter}>
                  <p style={{ color: "blue", size: 70 }}>
                    <FiArrowRightCircle />
                  </p>

                  <span> World Test Super League</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr></hr>

        {/* <div className={styles.sidebar}></div> */}
        {/* ****************************************************************************** */}
        <div className={styles.CatHeading} style={{ marginTop: "10px" }}>
          Quick Links
        </div>

        <div >
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> T20 Time Out</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> T20 Time Out Hindi</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> ICC Rankings</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Fantacy Pick</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Haan Ya Naa</span>
              </div>
            </a>
          </div>
        </div>
        {/* ************************************************************************* */}
        <hr></hr>
        {/* ************************************** */}
        <div className={styles.CatHeading} style={{ marginTop: "10px" }}>
          ESPNcrinfo Apps
        </div>
        {/* <div className={styles.Featured_div}>FEATURED</div> */}
        <div>
          <div>
            <a
              className="active"
              href="https://play.google.com/store/apps/details?id=com.july.cricinfo&hl=en"
            >
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Android App</span>
              </div>
            </a>
          </div>
          <div>
            <a
              className="active"
              href="https://apps.apple.com/in/app/cricinfo-live-cricket-scores/id417408017"
            >
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> iOS App</span>
              </div>
            </a>
          </div>
        </div>
        {/* *************************************************************************** */}
        <hr></hr>
        <div className={styles.CatHeading} style={{ marginTop: "10px" }}>
          Follow ESPNcrinfo
        </div>
        {/* <div className={styles.Featured_div}>FEATURED</div> */}
        <div>
          <div>
            <a
              className="active"
              href="https://www.instagram.com/espncricinfo/"
            >
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Instagram</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="https://twitter.com/espncricinfo">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Twitter</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="https://www.facebook.com/Cricinfo/">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Facebook</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="https://www.youtube.com/espncricinfo">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> You Tube</span>
              </div>
            </a>
          </div>
        </div>
        <hr></hr>
        <div className={styles.CatHeading} style={{ marginTop: "10px" }}>
          ESPN Sites
        </div>
        {/* <div className={styles.Featured_div}>FEATURED</div> */}
        <div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> The Cricket Monthly</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> ESPN</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Asia Cup</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> England v South Africa</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> West Indies v New Zealand</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span>Australia v Zimbabwe</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> The Hundred (M)</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> The Hundred (W)</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Country Div1</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Country Div2</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> 6IXTY (M)</span>
              </div>
            </a>
          </div>

          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> World Test Championship</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> World Test Super League</span>
              </div>
            </a>
          </div>
        </div>

        <hr></hr>
        <div className={styles.CatHeading} style={{ marginTop: "10px" }}>
          Key Series
        </div>
        <div>
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
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Asia Cup</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> England v South Africa</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> West Indies v New Zealand</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Australia v Zimbabwe</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> The Hundred (M)</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> The Hundred (W)</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Country Div1</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Country Div2</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> 6IXTY (M)</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> 6IXTY (W)</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> Womenn's championship</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> World Test Championship</span>
              </div>
            </a>
          </div>
          <div>
            <a className="active" href="#home">
              <div className={styles.filter}>
                <p style={{ color: "blue", size: 70 }}>
                  <FiArrowRightCircle />
                </p>

                <span> World Test Super League</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
