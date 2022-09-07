import React from "react";
import RightSide from "./LiveScore/RightSide";
import styles from "./New.module.css";
import Sidebar from "./Sidebar/Sidebar";

const Newss = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />
      <div
        className="mainContainer"
        style={{
          /* booooooooooooooooorrrrrrrrrrDDDDeerrrrrrrrrrrrrrrrrrrrrrr */

          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "1px",
          padding: "2px",
          width: "55%",
          // marginLeft: "50px",
        }}
      >
        <div
          className="innerContainer"
          style={{
            padding: "2px",
            /* booooooooooooooooorrrrrrrrrrDDDDeerrrrrrrrrrrrrrrrrrrrrrr */
            // border:"1px solid blue",
          }}
        >
          <div className={styles.News}>
            <div className={styles.first}>
              <a href="">
                <span className={styles.span}>{">"}</span> Scorecard: Mumbai Vs
                Delhi
              </a>
              <h6
                style={{
                  marginLeft: "70px",
                  marginTop: "-1px",
                }}
              >
                Semi Final(Ranji Trophy)
              </h6>{" "}
              <hr />
              <a id={styles.mb} href="">
                {" "}
                <div
                  style={{
                    height: "100px",
                    width: "300px",
                    borderRadius: "15px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    /* booooooooooooooooorrrrrrrrrrDDDDeerrrrrrrrrrrrrrrrrrrrrrr */
                    // border:"1px solid teal",
                    marginTop: "-15px",
                  }}
                >
                  {" "}
                  <div>
                    {" "}
                    <img
                      style={{
                        height: "25px",
                        width: "50px",

                        /* booooooooooooooooorrrrrrrrrrDDDDeerrrrrrrrrrrrrrrrrrrrrrr */
                        //   border:"1px solid green"
                        //   small lion div
                      }}
                      src="https://static.toiimg.com/thumb/msid-84825540,imgsize-241772,width-400,resizemode-4/84825540.jpg"
                      alt=""
                    />
                    {"    "} Mumbai <span>{" (42 Ov) 393 & 131/1"}</span>{" "}
                  </div>
                  <div
                    style={{
                      marginTop: "0px",
                    }}
                  >
                    <img
                      style={{
                        height: "25px",
                        width: "50px",
                      }}
                      src="https://www.upca.tv/wp-content/uploads/2019/11/upca-logo-2.png"
                      alt=""
                    />
                    Delhi <span>{"(Yet to bat)"}</span>
                  </div>
                </div>
              </a>{" "}
              <hr />
              <a
                className={styles.ancer}
                href="https://www.espncricinfo.com/video/can-virat-kohli-make-it-count-at-the-asia-cup-1330324"
              >
                {" "}
                <div className={styles.container}>
                  <div className={styles.article}></div>
                </div>
                <div className={styles.top1}>
                  <h3
                    style={{
                      color: "black",
                    }}
                  >
                    Can Kohli make it count at the Asia Cup?
                  </h3>
                  <h4
                    style={{
                      color: "grey",
                    }}
                  >
                    The former India captain will have a point to prove come
                    August 28
                  </h4>
                </div>
              </a>
              <hr />
              <a
                href="https://www.espncricinfo.com/story/asia-cup-t20-world-cup-posers-for-india-rohit-sharma-kl-rahul-virat-kohli-top-three-rishabh-pant-or-dinesh-karthik-1330336"
                style={{
                  color: "black",
                }}
              >
                <div className={styles.top2}>
                  <div className={styles.div}>
                    <div className={styles.a}></div>
                  </div>

                  <div className={styles.div}>
                    <div className={styles.b}></div>
                  </div>

                  <div className={styles.div}>
                    <div className={styles.c}></div>
                  </div>

                  <div className={styles.h5}>
                    Posers for India:The same old top three?
                  </div>
                  <div className={styles.h5}>
                    Big battels:Mushfiqur vs Hardik, take two?
                  </div>
                  <div className={styles.h5}>
                    Akram:'Pakistan team is on the rise'
                  </div>
                </div>
              </a>
              <hr />
              <a href="https://www.espncricinfo.com/series/ranji-trophy-2021-22-2022-1280196/bengal-vs-madhya-pradesh-1st-semi-final-1313307/live-cricket-score">
                <span className={styles.span}>{">"}</span> Scorecard: Bengal Vs
                Madhya Pradesh
              </a>{" "}
              <hr />
              <h5 className={styles.is}>ENGLAND VS SOUTH AFRICA</h5>
              <h6
                style={{
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                2ND MEN'S TEST, OLD TRAFFORD
              </h6>
              <a href="https://www.espncricinfo.com/video/politeenquiries-did-bazball-take-a-summer-break-last-week-1330601">
                <div className={styles.container}>
                  <div className={styles.pant}>
                    {/* <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR127rwchtsq64FhlcpiVeASOl8MstTeYrQZg&usqp=CAU"
               alt=""
             /> */}
                  </div>
                </div>
              </a>
            </div>

            <div className={styles.first}>
              <a href="https://www.espncricinfo.com/series/bangladesh-tour-of-west-indies-2022-1317143/west-indies-vs-bangladesh-1st-test-1317147/live-cricket-score">
                <span className={styles.span}>{">"}</span>BANGLADESH TOUR OF WI
              </a>
              <h6
                style={{
                  marginLeft: "59px",
                  marginTop: "-3px",
                }}
              >
                1ST TEST, ANTIGUA
              </h6>
              <h3
                style={{
                  color: "red",
                  marginLeft: "38px",
                  marginTop: "-7px",
                }}
              >
                <li>LIVE</li>
              </h3>
              <hr />
              <a
                style={{
                  color: "black",
                }}
                href="https://www.espncricinfo.com/series/bangladesh-tour-of-west-indies-2022-1317143/west-indies-vs-bangladesh-1st-test-1317147/live-cricket-score"
              >
                {" "}
                <div
                  style={{
                    height: "128px",
                    width: "300px",
                    borderRadius: "15px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    marginTop: "-3px",
                  }}
                >
                  {" "}
                  <div>
                    {" "}
                    <img
                      style={{
                        height: "25px",
                        width: "50px",
                      }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png"
                      alt=""
                    />
                    {"    "} BANGLADESH <span>{" (1.3 Ov) 1/1"}</span>{" "}
                  </div>
                  <div
                    style={{
                      marginTop: "1px",
                    }}
                  >
                    {" "}
                    <img
                      style={{
                        height: "25px",
                        width: "50px",
                      }}
                      src="https://www.sportzcraazy.com/wp-content/uploads/2020/11/west-indies-cricket-team-logo.jpg"
                      alt=""
                    />
                    {"      "}
                    WEST INDIES <span>{"(Yet to bat)"}</span>{" "}
                    <h6
                      style={{
                        //  marginLeft: "30px",
                        fontSize: "13px",
                        textAlign: "left",
                      }}
                    >
                      Day 1-Session 1: West Indies Choose to Field
                    </h6>
                  </div>
                </div>
              </a>
              <hr />
              <div className={styles.container}>
                <div className={styles.bwi}></div>
              </div>{" "}
              <h2
                style={{
                  //  marginLeft: "60px",

                  textAlign: "center",
                }}
              >
                Bangladesh look to abandon horrors of 2022 vs WI
              </h2>{" "}
              <hr />
              {/* ............small img and text............... */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "95%",
                  marginLeft: "11px",

                  //  border:"border 2px solid black"
                }}
              >
                <div className={styles.div}>
                  {/* w 200px */}
                  <div className={styles.ban}></div>
                  {/* w 100% */}
                </div>

                <div
                  style={{
                    width: "400px",
                    marginLeft: "5px",
                    marginTop: "30px",
                    //  border:"1px solid magenta"
                  }}
                >
                  TV coverage in Bangladesh unlikely for Antigua Test TV
                  coverage in Bangladesh unlikely for Antigua Test This could be
                  the first time since 2001 that a Test in which Bangladesh are
                  playing in will not be shown at home
                </div>
              </div>
              <hr />
              {/* seprate part */}
              <a href="">
                <span className={styles.span}>{">"}</span>Fit-again Roach added
                to WI squad
              </a>
              <a href="">
                <span className={styles.span}>{">"}</span>Back injury sidelines
                Yasir Ali
              </a>
              <div>
                <a href="">
                  <span className={styles.span}>{">"}</span>WTC points table
                </a>
              </div>
            </div>
            {/* newwwwwwwwwwwwwwwwwwwwwwwwwwwww */}
            <div className={styles.first}>
              <a href="">
                <span className={styles.span}></span>IPL MEDIA RIGHTS
              </a>
              <h6
                style={{
                  marginLeft: "50px",
                  marginTop: "-1px",
                }}
              >
                2023-27 CYCLE
              </h6>
              <h3
                style={{
                  color: "red",
                  marginLeft: "50px",
                  marginTop: "-15px",
                }}
              ></h3>
              <hr />
              <a href="https://www.youtube.com/watch?v=V3l-MejAhhY">
                <div className={styles.container}>
                  <div className={styles.pkl}></div>
                </div>
              </a>{" "}
              <h3
                style={{
                  // marginLeft: "70px",
                  textAlign: "center",
                }}
              >
                Just How Massive is the IPL's new Media right deals
              </h3>{" "}
              <hr />
              <a
                style={{
                  color: "black",
                }}
                href="https://www.espncricinfo.com/story/ipl-to-have-two-and-a-half-month-window-from-next-icc-ftp-says-bcci-secretary-jay-shah-1319919"
              >
                <div className={styles.top2}>
                  <div className={styles.div}>
                    <div className={styles.a1}></div>
                  </div>

                  <div className={styles.div}>
                    <div className={styles.b1}></div>
                  </div>

                  <div className={styles.div}>
                    <div className={styles.c1}></div>
                  </div>

                  <div className={styles.h5}>
                    Each IPL game worth $15.11m in new bumber
                  </div>
                  <div className={styles.h5}>
                    {" "}
                    196%, $950m-key Numbers from a record-breaking{" "}
                  </div>
                  <div className={styles.h5}>
                    "two and a half month IPL Window" from the next FTP
                  </div>
                </div>
              </a>
            </div>
            {/* neeeeeeeeeewwwwwwwwwwwwwwwww         ends here */}
            <div className={styles.first}>
              <a
                style={{
                  color: "black",
                }}
                href="https://www.espncricinfo.com/story/england-vs-nz-3rd-test-jamie-overton-added-to-england-squad-for-headingley-test-vs-new-zealand-1320221"
              >
                <span className={styles.span}></span>ENGLAND VS NEW ZEALAND
              </a>
              <h6
                style={{
                  marginLeft: "50px",
                  marginTop: "-1px",
                  fontSize: "15px",
                }}
              >
                3RD TEST, HEADINGLEY
              </h6>
              <h3
                style={{
                  color: "red",
                  marginLeft: "50px",
                  marginTop: "-15px",
                }}
              ></h3>
              {/* <hr /> */}
              <a className={styles.ancer} href="">
                <div className={styles.container}>
                  <div className={styles.james}>
                    {/* <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR127rwchtsq64FhlcpiVeASOl8MstTeYrQZg&usqp=CAU"
               alt=""
             /> */}
                  </div>
                </div>
              </a>{" "}
              <h3
                style={{
                  // marginLeft: "70px",
                  textAlign: "center",
                }}
              >
                Jamie Overton added to england squad for Headingley test
              </h3>
              <h5
                style={{
                  // marginLeft: "70px",
                  textAlign: "center",
                  color: "grey",
                }}
              >
                {" "}
                Fast Bowler Likely to make debut Vs NZ as England manage
                workLoads
              </h5>
            </div>

            <div className={styles.first}>
              <div
                style={{
                  marginLeft: "50px",
                }}
              >
                IRELAND NEWS
              </div>{" "}
              <hr />
              <div className={styles.container}>
                <div className={styles.ire}></div>
              </div>
              <h3
                style={{
                  // marginLeft: "70px",
                  textAlign: "center",
                }}
              >
                William Porterfield announces international retirement
              </h3>
              <h4
                style={{
                  // marginLeft: "70px",
                  textAlign: "center",
                  color: "grey",
                }}
              >
                His exit follows that of seamer Peter Chase who hung up his
                boots last week
              </h4>
            </div>

            <div className={styles.first}>
              <div
                style={{
                  marginLeft: "20px",
                }}
              >
                ICC RANKING
              </div>{" "}
              <hr />
              <div className={styles.container}>
                <div className={styles.icc}></div>
              </div>
              <h3
                style={{
                  // marginLeft: "70px",
                  textAlign: "center",
                }}
              >
                Hazlewood is No. 1 T20I bowler; Kishan highest-rated India
                batter
              </h3>
              <h4
                style={{
                  // marginLeft: "70px",
                  textAlign: "center",
                  color: "grey",
                }}
              >
                The last Australia bowler to top the bowling charts was Bracken
                in 2021
              </h4>{" "}
              <hr />
              <div
                className={styles.root}
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "95%",
                  marginLeft: "65px",
                }}
              >
                <div className={styles.div}>
                  <div className={styles.rot}></div>
                </div>{" "}
                <div
                  style={{
                    margin: "auto",
                    width: "400px",
                    marginLeft: "72px",
                    marginTop: "30px",
                    // border:"1px solid magenta"
                  }}
                >
                  Root rises to No. 1 in Tests; Imam moves past Kohli to No. 2
                  in ODIs Root rises to No. 1 in Tests; Imam moves past Kohli to
                  No. 2 in ODIs Replaces Labuschagne at the top following his
                  176 in Trent Bridge
                </div>
              </div>
            </div>

            <div className={styles.first}>
              <div
                style={{
                  marginLeft: "20px",
                }}
              >
                THE LIGHT ROLLER
              </div>
              <div
                style={{
                  marginLeft: "20px",
                }}
              >
                SATIRE BY ALAN GARDNER
              </div>{" "}
              <hr />
              <div className={styles.container}>
                <div className={styles.test}></div>
              </div>
              <h3
                style={{
                  marginLeft: "20px",
                  textAlign: "center",
                }}
              >
                Cricket world riveted by best-worst-batter-in-the-world contest
              </h3>
              <div
                style={{
                  width: "600px",
                  // marginLeft: "20px",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                {" "}
                <h4
                  style={
                    {
                      // textAlign:"end"
                    }
                  }
                >
                  And when we're not all agog for Boult vs Anderson, we're
                  waiting to see whether Jay-Z will bring Brooklyn's finest PR
                  skills to our game
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightSide />
    </div>
  );
};

export default Newss;
