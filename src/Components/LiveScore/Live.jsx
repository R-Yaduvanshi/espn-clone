import React from "react";
// *****************************************
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

// *********************************************************
import { FiArrowRightCircle } from "react-icons/fi";
import styles from "./Live.module.css";
//{info}
const Live = () => {
  const dispatch = useDispatch();
  const [serchParams, setSearchParams] = useSearchParams();
  const urlcategory = serchParams.getAll("category");
  const [category, setCategory] = useState(urlcategory || []);

  //  ********************************************************
  const handleClick = (e) => {
    const option = e.target.value;
    let newcategory = [...category];
    if (category.includes(option)) {
      newcategory.splice(newcategory.indexOf(option), 1);
    } else {
      newcategory.push(option);
    }
    setCategory(newcategory);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({ category });
      //setSearchParams({category:categoryvalue},{replace:true})
    }
  }, [category, setSearchParams, dispatch]);

  // ****************************************************************

  return (
    <>
      <h1 style={{ color: "red" }}>live </h1>
      <div style={{ display: "flex" }}>
        <div>
          <button
            onClick={handleClick}
            value="INDIA"
            defaultChecked={category.includes("INDIA")}
          >
            INDIA
          </button>
        </div>
        <div>
          <button
            onClick={handleClick}
            value="T20"
            defaultChecked={category.includes("T20")}
          >
            T20
          </button>
        </div>
        <div>
          <button
            onClick={handleClick}
            value="ODI"
            defaultChecked={category.includes("ODI")}
          >
            ODI
          </button>
        </div>
        <div>
          <button
            onClick={handleClick}
            value="MEN"
            defaultChecked={category.includes("MEN")}
          >
            MEN
          </button>
        </div>
        <div>
          <button
            onClick={handleClick}
            value="WOMEN"
            defaultChecked={category.includes("WOMEN")}
          >
            WOMEN
          </button>
        </div>
      </div>
      <div className={styles.mainndiv}>
        <div className={styles.top_events}>
          <p>Top Events</p>
        </div>
        <hr />
        {/* ****************************************** */}
        <div style={{ display: "flex", gap: "10px" }}>
          <div className={styles.box}>
            {/* ************************************************* */}
            <div className={styles.left_box}>
              <p>
                <span style={{ color: "black" }}>TODAY 1:40 PM</span>
                <br />
                1st T201(N).Adelaide,Jan 20 2022,
                <a href="file:///home/rehana/Desktop/MasaiProject/Serise/womenAses.html">
                  Women's Ashes
                </a>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/313100/313124.logo.png"
                        alt="Australia"
                      />
                    </td>
                    <td>
                      <b>AUSTRALIA</b>
                      <p>
                        Match starts in{" "}
                        <span style={{ color: "black" }}>2</span>hrs{" "}
                      </p>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/313100/313145.logo.png"
                        alt="BANGLADESH"
                      />
                    </td>
                    <td>
                      <b>BANGLADESH</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Match starts in <span style={{ color: "black" }}>2</span>hrs{" "}
              </p>
              <button>Summary</button>
              <button>Summary</button>
            </div>

            <div id="mid_line"></div>

            <div className={styles.right_box}>
              <p>
                <span style={{ color: "black" }}>TODAY 1:40 PM</span>
                <br />
                1st T201(N).Adelaide,Jan 20 2022,
                <a href="file:///home/rehana/Desktop/MasaiProject/Serise/womenAses.html">
                  Women's Ashes
                </a>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_s_100/lsci/db/PICTURES/CMS/313100/313128.logo.png"
                        alt="Australia"
                      />
                    </td>
                    <td>
                      <b category>INDIA</b>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_s_100/lsci/db/PICTURES/CMS/313300/313340.logo.png"
                        alt="BANGLADESH"
                      />
                    </td>
                    <td>
                      <b>PAKISTAN</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Match starts in <span style={{ color: "black" }}>2</span>hrs{" "}
              </p>
              <button>Summary</button>
              <button>Summary</button>
            </div>
            {/* ******************************** */}

            {/* ************************************************* */}
            <div className={styles.left_box}>
              <p>
                <span style={{ color: "black" }}>TODAY 1:40 PM</span>
                <br />
                1st T201(N).Adelaide,Jan 20 2022,
                <a href="file:///home/rehana/Desktop/MasaiProject/Serise/womenAses.html">
                  Women's Ashes
                </a>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/313100/313124.logo.png"
                        alt="Australia"
                      />
                    </td>
                    <td>
                      <b>AUSTRALIA</b>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/313100/313145.logo.png"
                        alt="BANGLADESH"
                      />
                    </td>
                    <td>
                      <b>BANGLADESH</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Match starts in <span style={{ color: "black" }}>2</span>hrs{" "}
              </p>
              <button>Summary</button>
              <button>Summary</button>
            </div>

            <div id="mid_line"></div>

            <div className={styles.right_box}>
              <p>
                <span style={{ color: "black" }}>TODAY 1:40 PM</span>
                <br />
                1st T201(N).Adelaide,Jan 20 2022,
                <a href="file:///home/rehana/Desktop/MasaiProject/Serise/womenAses.html">
                  Women's Ashes
                </a>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_s_100/lsci/db/PICTURES/CMS/313100/313125.logo.png"
                        alt="Australia"
                      />
                    </td>
                    <td>
                      <b>AFGANISTAN</b>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_s_100/lsci/db/PICTURES/CMS/313300/313340.logo.png"
                        alt="BANGLADESH"
                      />
                    </td>
                    <td>
                      <b>PAKISTAN</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Match starts in <span style={{ color: "black" }}>2</span>hrs{" "}
              </p>
              <button>Summary</button>
              <button>Summary</button>
            </div>
            {/* ******************************** */}
            {/* ************************************************* */}
            <div className={styles.left_box}>
              <p>
                <span style={{ color: "black" }}>TODAY 1:40 PM</span>
                <br />
                1st T201(N).Adelaide,Jan 20 2022,
                <a href="file:///home/rehana/Desktop/MasaiProject/Serise/womenAses.html">
                  Women's Ashes
                </a>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/313100/313124.logo.png"
                        alt="Australia"
                      />
                    </td>
                    <td>
                      <b>AUSTRALIA</b>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/313100/313145.logo.png"
                        alt="BANGLADESH"
                      />
                    </td>
                    <td>
                      <b>BANGLADESH</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Match starts in <span style={{ color: "black" }}>2</span>hrs{" "}
              </p>
              <button>Summary</button>
              <button>Summary</button>
            </div>

            <div id="mid_line"></div>

            <div className={styles.right_box}>
              <p>
                <span style={{ color: "black" }}>TODAY 1:40 PM</span>
                <br />
                1st T201(N).Adelaide,Jan 20 2022,
                <a href="file:///home/rehana/Desktop/MasaiProject/Serise/womenAses.html">
                  Women's Ashes
                </a>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_s_100/lsci/db/PICTURES/CMS/313100/313125.logo.png"
                        alt="Australia"
                      />
                    </td>
                    <td>
                      <b>AFGANISTAN</b>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_s_100/lsci/db/PICTURES/CMS/313300/313340.logo.png"
                        alt="BANGLADESH"
                      />
                    </td>
                    <td>
                      <b>PAKISTAN</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Match starts in <span style={{ color: "black" }}>2</span>hrs{" "}
              </p>
              <button>Summary</button>
              <button>Summary</button>
            </div>
            {/* ******************************** */}
            {/* ************************************************* */}
            <div className={styles.left_box}>
              <p>
                <span style={{ color: "black" }}>TODAY 1:40 PM</span>
                <br />
                1st T201(N).Adelaide,Jan 20 2022,
                <a href="file:///home/rehana/Desktop/MasaiProject/Serise/womenAses.html">
                  Women's Ashes
                </a>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/313100/313124.logo.png"
                        alt="Australia"
                      />
                    </td>
                    <td>
                      <b>AUSTRALIA</b>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/313100/313145.logo.png"
                        alt="BANGLADESH"
                      />
                    </td>
                    <td>
                      <b>BANGLADESH</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Match starts in <span style={{ color: "black" }}>2</span>hrs{" "}
              </p>
              <button>Summary</button>
              <button>Summary</button>
            </div>

            <div id="mid_line"></div>

            <div className={styles.right_box}>
              <p>
                <span style={{ color: "black" }}>TODAY 1:40 PM</span>
                <br />
                1st T201(N).Adelaide,Jan 20 2022,
                <a href="file:///home/rehana/Desktop/MasaiProject/Serise/womenAses.html">
                  Women's Ashes
                </a>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_s_100/lsci/db/PICTURES/CMS/313100/313125.logo.png"
                        alt="Australia"
                      />
                    </td>
                    <td>
                      <b>AFGANISTAN</b>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_s_100/lsci/db/PICTURES/CMS/313300/313340.logo.png"
                        alt="BANGLADESH"
                      />
                    </td>
                    <td>
                      <b>PAKISTAN</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Match starts in <span style={{ color: "black" }}>2</span>hrs{" "}
              </p>
              <button>Summary</button>
              <button>Summary</button>
            </div>
            {/* ******************************** */}
            {/* ************************************************* */}
            <div className={styles.left_box}>
              <p>
                <span style={{ color: "black" }}>TODAY 1:40 PM</span>
                <br />
                1st T201(N).Adelaide,Jan 20 2022,
                <a href="file:///home/rehana/Desktop/MasaiProject/Serise/womenAses.html">
                  Women's Ashes
                </a>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/313100/313124.logo.png"
                        alt="Australia"
                      />
                    </td>
                    <td>
                      <b>AUSTRALIA</b>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/313100/313145.logo.png"
                        alt="BANGLADESH"
                      />
                    </td>
                    <td>
                      <b>BANGLADESH</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Match starts in <span style={{ color: "black" }}>2</span>hrs{" "}
              </p>
              <button>Summary</button>
              <button>Summary</button>
            </div>

            <div id="mid_line"></div>

            <div className={styles.right_box}>
              <p>
                <span style={{ color: "black" }}>TODAY 1:40 PM</span>
                <br />
                1st T201(N).Adelaide,Jan 20 2022,
                <a href="file:///home/rehana/Desktop/MasaiProject/Serise/womenAses.html">
                  Women's Ashes
                </a>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_s_100/lsci/db/PICTURES/CMS/313100/313125.logo.png"
                        alt="Australia"
                      />
                    </td>
                    <td>
                      <b>AFGANISTAN</b>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className={styles.country_slide_img}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_s_100/lsci/db/PICTURES/CMS/313300/313340.logo.png"
                        alt="BANGLADESH"
                      />
                    </td>
                    <td>
                      <b>PAKISTAN</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Match starts in <span style={{ color: "black" }}>2</span>hrs{" "}
              </p>
              <button>Summary</button>
              <button>Summary</button>
            </div>
            {/* ******************************** */}
          </div>

          {/* ************************************************************* */}
          <div className={styles.adds_box} style={{ marginTop: "0px" }}>
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
                <link href="https://www.espncricinfo.com/ci/engine/series/index.html" />
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
        </div>
      </div>
      {/* ********************************************************************* */}
    </>
  );
};

export default Live;
