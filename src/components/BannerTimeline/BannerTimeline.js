import React, { useState } from "react";
import "./BannerTimeline.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BannerTimeline() {
  // const params = {
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next-timeline", // Add your class name for next button
  //     prevEl: ".swiper-button-prev-timeline", // Add your class name for prev button
  //   },
  //   spaceBetween: 30,
  //   loop: true,
  // };

  const [swiper, setSwipper] = useState(null);
  const [slide, setSlide] = useState(0);

  function buildSlide() {
    const slides = [];
    // for (let i = 0; i < 10; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-NEEDFORSPEED-PAYBACK-EA.jpg`}>
        <img src={require("../../img/NEEDFORSPEED-PAYBACK-EA.jpg")} alt="" />
      </SwiperSlide>
    );

    slides.push(
      <SwiperSlide key={`slide-WRECKFEST-THQNordic.jpg`}>
        <img src={require("../../img/WRECKFEST-THQNordic.jpg")} alt="" />
      </SwiperSlide>
    );

    slides.push(
      <SwiperSlide key={`slide-APEXLEGENDS-2-1.jpg`}>
        <img src={require("../../img/APEXLEGENDS-2-1.jpg")} alt="" />
      </SwiperSlide>
    );

    slides.push(
      <SwiperSlide key={`slide-APEXLEGENDS-1.jpg`}>
        <img src={require("../../img/APEXLEGENDS-1.jpg")} alt="" />
      </SwiperSlide>
    );

    slides.push(
      <SwiperSlide key={`slide-GLASS-EGG-DIGITAL-MEDIA-2.jpg`}>
        <img src={require("../../img/GLASS-EGG-DIGITAL-MEDIA-2.jpg")} alt="" />
      </SwiperSlide>
    );

    slides.push(
      <SwiperSlide key={`slide-GLASS-EGG-DIGITAL-MEDIA-3.jpg`}>
        <img src={require("../../img/GLASS-EGG-DIGITAL-MEDIA-3.jpg")} alt="" />
      </SwiperSlide>
    );

    slides.push(
      <SwiperSlide key={`slide-GLASS-EGG-DIGITAL-MEDIA.jpg`}>
        <img src={require("../../img/GLASS-EGG-DIGITAL-MEDIA.jpg")} alt="" />
      </SwiperSlide>
    );

    slides.push(
      <SwiperSlide key={`slide-GLASS-EGG-DIGITAL-MEDIA-4.jpg`}>
        <img src={require("../../img/GLASS-EGG-DIGITAL-MEDIA-4.jpg")} alt="" />
      </SwiperSlide>
    );

    slides.push(
      <SwiperSlide key={`slide-FORZA-HORIZON4-XBOXGAMESTUDIOS.jpg`}>
        <img
          src={require("../../img/FORZA-HORIZON4-XBOXGAMESTUDIOS.jpg")}
          alt=""
        />
      </SwiperSlide>
    );

    slides.push(
      <SwiperSlide key={`slide-FORZAMOTORSPORT7-XBOXGAMESTUDIOS.jpg`}>
        <img
          src={require("../../img/FORZAMOTORSPORT7-XBOXGAMESTUDIOS.jpg")}
          alt=""
        />
      </SwiperSlide>
    );

    slides.push(
      <SwiperSlide key={`slide-FORZAMOTORSPORT7-1-XBOXGAMESTUDIOS.jpg`}>
        <img
          src={require("../../img/FORZAMOTORSPORT7-1-XBOXGAMESTUDIOS.jpg")}
          alt=""
        />
      </SwiperSlide>
    );
    // }
    return slides;
  }

  // const slides = [];
  const mapYear = {
    0: 1995,
    1: 1999,
    2: 2002,
    3: 2003,
    4: 2005,
    5: 2006,
    6: 2007,
    7: 2008,
    8: 2009,
    9: 2010,
    10: 2011,
    11: 2012,
  };
  return (
    <div className="container-fluid py-8 mx-auto">
      <div className="grid justify-items-center">
        <h1 className="text-3xl md:text-6xl sm:text-4xl text-blue-400 font-mono font-extrabold ml-7">
          {" "}
          ABOUT US{" "}
        </h1>
        <div
          className="bg-blue-400 justify-self-center rounded-lg mt-8"
          style={{ width: "300px", height: "8px" }}
        ></div>
      </div>
      <div className="flex justify-center mx-8 leading-4 mt-10 px-5">
        <div className="lg:w-1/2 md:w-full">
          <p className="text-lg md:text-md sm:text-xl font-extralight">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt ornare massa eget egestas purus viverra. Lacus sed turpis
            tincidunt id. Id diam vel quam elementum pulvinar etiam. Proin nibh
            nisl condimentum id venenatis a. Amet porttitor eget dolor morbi non
            arcu. Vestibulum lectus mauris ultrices eros. Nisl tincidunt eget
            nullam non nisi est sit amet. Purus sit amet volutpat consequat.{" "}
          </p>
        </div>
      </div>
      <div>
        <Swiper
          // navigation arrows
          navigation={{
            nextEl: ".swiper-button-next-timeline",
            prevEl: ".swiper-button-prev-timeline",
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mt-10 timeline-banner"
          spaceBetween={50}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          onSlideChange={(swiper) => {
            // console.log("Slide index changed to: ", swiper.activeIndex);
            setSlide(swiper.activeIndex);
          }}
          onSwiper={(swiper) => setSwipper(swiper)}
        >
          {buildSlide()}
          <div className="flex align-center justify-center  bg-gray-300 timeline-custom">
            <div
              className="flex align-center justify-center py-7 bg-white px-6"
              style={{ height: "100px" }}
            >
              <div
                className="swiper-button-prev-timeline"
                style={{ height: "30px" }}
                onClick={() => swiper.slidePrev()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  />
                </svg>
              </div>
              <div
                className="inline-block text-2xl font-bold mx-4 "
                style={{ height: "30px" }}
              >
                {mapYear[slide.toString()]}
              </div>
              <div
                className="swiper-button-next-timeline "
                style={{ height: "30px" }}
                onClick={() => swiper.slideNext()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400 ml-2 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
