import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CarouselProduct.css";

export default function CarouselProduct() {
  const slider = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [swiper, setSwipper] = useState(null);
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      id: 1,
      name: "BRIMSTONE",
      image: "/product/Astra_Ability_Icons_X_CosmicDividev2.png",
    },
    {
      id: 2,
      name: "PHOENIX",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 3,
      name: "SAGE",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 4,
      name: "SOVA",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 5,
      name: "VIPER",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 6,
      name: "CYPHER",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 7,
      name: "REYNA",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 8,
      name: "KILLJOY",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 9,
      name: "BREACH",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 10,
      name: "OMEN",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 11,
      name: "JETT",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 12,
      name: "RAZE",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 13,
      name: "SKYE",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 14,
      name: "YORU",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 15,
      name: "ASTRA",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 16,
      name: "KAY/O",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    centerMode: true,
    responsive: [
      { breakpoint: 350, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 3 } },
      { breakpoint: 800, settings: { slidesToShow: 4 } },
      { breakpoint: 1800, settings: { slidesToShow: 5 } },
    ],

    // afterChange: (currentSlide, nextSlide) => {
    //   setUpdateCount(updateCount + 1);
    //   // this.setState((state) => ({ updateCount: state.updateCount + 1 }));
    //   console.log("before change", currentSlide, updateCount, nextSlide);
    // },
    // beforeChange: (current, next) => {
    //   setUpdateCount(setSlideIndex + 1);
    //   console.log("after change", current, setSlideIndex);

    //   // this.setState({ slideIndex: next });
    // },
  };

  function getSlides() {
    const rows = [];
    for (const index in slides) {
      const slide = slides[index];
      rows.push(
        <div
          onClick={() => handleClick(slide)}
          className="text-6xl  my-10 font-semibold slide-custom"
          style={{ width: "60%" }}
          key={index}
        >
          {/* <Link
            activeClass="active"
            className="title"
            to="content"
            spy={true}
            smooth={true}
            duration={600}
          > */}
          <h3
            className={
              index.toString() === slideIndex.toString()
                ? "text-blue-500 text-left"
                : " text-left "
            }
          >
            {" "}
            <span> {slide.id} </span> {slide.name}{" "}
          </h3>
          {/* </Link> */}
        </div>
      );
    }
    return rows;
  }

  function buildSwiper() {
    const rowItems = [];
    // for (let i = 0; i < 10; i += 1) {

    for (const index in slides) {
      const slide = slides[index];
      rowItems.push(
        <SwiperSlide key={`${index}`}>
          <img src={require("../../img/NEEDFORSPEED-PAYBACK-EA.jpg")} alt="" />
          <p className="mt-2">
            {" "}
            {slide.id}-{slide.name}{" "}
          </p>
        </SwiperSlide>
      );
    }
    console.log(slides);
    // }
    return rowItems;
  }

  function handleChangeSkill() {
    const currentSlide = slides[slideIndex];
    return (
      <div className="content grid grid-cols-3 sm:grid-cols-1">
        <div className=" flex justify-center items-center col-span-3 md:col-span-1 sm:col-span-1 p-10">
          <h1 className=" pr-10 font-serif font-extrabold md:text-2xl sm:text-sm">
            {" "}
            KỸ NĂNG ĐẶC BIỆT :{" "}
          </h1>
          <div className="pr-3 font-sans font-light"> {currentSlide.name}</div>
          <div className="border-solid border-black sm:justify-between w-20 h-20 mr-5 ">
            <img
              className="bg-gray-300"
              src={require(`../../img${currentSlide.image}`)}
              alt=""
            />
          </div>
          <div className="border-solid border-black w-20 h-20 mr-5">
            <img
              className="bg-gray-300"
              src={require("../../img/product/Astra_Ability_Icons_E_Nebulav2.png")}
              alt=""
            />
          </div>
          <div className="border-solid border-black w-20 h-20 mr-5">
            <img
              className="bg-gray-300"
              src={require("../../img/product/Astra_Ability_Icons_C_GravityWellv2.png")}
              alt=""
            />
          </div>
          <div className="border-solid border-black w-20 h-20">
            <img
              className="bg-gray-300"
              src={require("../../img/product/Astra_Ability_Icons_X_CosmicDividev2.png")}
              alt=""
            />
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 sm:col-span-3 flex justify-center py-10">
          <div
            className="p-6  bg-red-500"
            style={{ width: "70%", height: "400px" }}
          >
            <div> {currentSlide.name}</div>
          </div>
        </div>
      </div>
    );
  }
  // function handleChangeVideo() {
  //   const currentSlide = slides[slideIndex];
  //   return (
  //     <div
  //       className="p-6 px-auto  bg-red-500"
  //       style={{ width: "", height: "400px" }}
  //     >
  //       <div> {currentSlide.name}</div>
  //     </div>
  //   );
  // }
  function handleClick(slide) {
    const index = slides.findIndex((i) => i.id === slide.id);
    // console.log(slider, index);
    // slider go to curent index
    slider.current.slickGoTo(index);

    // set state for slide index which slide is chosen
    setSlideIndex(index);
    const element = document.getElementById("skill");
    if (element)
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });

    swiper.slideTo(swiper.loopedSlides == 1 ? index + 1 : index + 2);
  }
  // console.log("omdex", slideIndex);

  // console.log("sw", swiper);
  // function scrollToBottom() {
  //   props.scrollToBottom(10);
  // }

  return (
    <div>
      <div
        className="relative w-screen p-0 m-0"
        style={{
          backgroundImage: `url(${"/img/ge-intro.png"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "750px",
          width: "100vw",
        }}
      >
        {/* <img
        className="mt-14 w-screen sm:w-screen bg-repeat h-fit"
        src={require("../../img/agents-background.jpg")}
        alt=""
         
      /> */}
        <div
          className="text-white w-screen"
          style={{
            position: "absolute",
            paddingLeft: "15%",
            left: "0%",
            top: "0",
            bottom: "0",
            zIndex: "5",
          }}
        >
          <Slider ref={slider} {...settings}>
            {getSlides()}
          </Slider>
        </div>
      </div>

      {/* {handleChangeSkill()} */}
      <div id="skill">
        <Swiper
          // navigation arrows
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mt-10"
          loop={true}
          scrollbar={{ draggable: true }}
          onSlideChange={(swiper) => {
            // console.log(
            //   "Slide index changed to: ",
            //   swiper.activeIndex,
            //   slideIndex
            // );
            setSlide(swiper.activeIndex);
          }}
          onSwiper={(swiper) => setSwipper(swiper)}
        >
          {buildSwiper()}
          <div
            className="swiper-button-prev"
            onClick={() => swiper.slidePrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white md:my-16"
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
            className="swiper-button-next"
            onClick={() => swiper.slideNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white md:my-16"
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
        </Swiper>
      </div>
    </div>
  );
}
