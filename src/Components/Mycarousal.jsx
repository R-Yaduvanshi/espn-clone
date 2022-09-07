import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "./Card";
import "./CSS/carousal.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import useFetch from "../Hooks/useFetch";

export default function Mycarousal() {

  const API = "c430b1e6-8ab8-4018-8977-ed859b9b228a";
  const API2 = "5d007fd3-cf19-4444-a618-fab997c1f879";
  const { data, loading, error } = useFetch(
    `https://api.cricapi.com/v1/cricScore?apikey=${API2}`
  );

  const liveData = data.data;
  if (loading) {
    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1>...Loading</h1>
      </div>
    );
  }

  return error ? (
    <h1 id={data.id}>{data.reason}</h1>
  ) : (
    <div
      style={{
        height: "260px",
        backgroundColor: "#0398dc",
        padding: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "90%",
        }}
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={false}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            240: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {liveData &&
            liveData.map((info) => {
              return (
                <SwiperSlide
                  key={info.id}
                  style={{ height: "auto", width: "33%" }}
                >
                  <Card key={info.id} info={info} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}
