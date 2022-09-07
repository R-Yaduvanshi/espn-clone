
import React, { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Live from "./Live";
import styles from "./Livescore.module.css";
// import Result from "./Result";
import Upcomming from "./Upcomming";

const Livescore = () => {
  const [show, setShow] = useState(true);


  // **************************************************************************************************
  // const API = "c430b1e6-8ab8-4018-8977-ed859b9b228a";
  //const API2 = "c430b1e6-8ab8-4018-8977-ed859b9b228a";

  // const { data } = useFetch(
  //   `https://api.cricapi.com/v1/cricScore?apikey=${API}`
  // );
  //  const liveData = data.data;
  //  console.log("livedata",liveData)
  //  **********************************************************************************************************

  //  useEffect(()=>{
    
  //  },[])
  return (
    <>
    
      <div className={styles.container}>
        <div className={styles.nav}>
          <button
            className={show ? styles.active : ""}
            onClick={() => setShow(true)}
          >
            Live
          </button>
          <button
            className={show ? "" : styles.active}
            onClick={() => setShow(false)}
          >
            Upcoming
          </button>
          <button
            // className={ styles.active}
            onClick={() => setShow(false)}
          >
            Result
          </button>
        </div>
      </div>
      <div className={styles.main}>
        {show ? <Live /> : <Upcomming />}
        
      </div>
      {/* ******************************************************************************** */}
      {/* {liveData &&
        liveData.map((info) => {
          //console.log(info.id);
          return (
            <>
              <div className={styles.main}>
                {show ? (
                  <Live key={info.id} info={info} />
                ) : (
                  <Upcomming key={info.id} info={info} />
                )}
              </div>
            </>
          );
        })} */}
        {/* ************************************************************* */}
    </>
  );
};

export default Livescore;






// {
//   /* const color = d.y >= 70 ? "green" : d.y >= 50 ? "yellow" : "red"; */
// }
// {
//   /* condition1 ? result1 : condition2 ? result3 : result4 */
// }
