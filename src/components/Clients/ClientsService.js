import React from "react";
import Slider from "react-slick";
import "./ClientsService.css";

export default function ClientsService() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  function getFlagsRow() {
    const flags = [
      "../../img/country/AUS.png",
      "../../img/country/Germany.png",
      "../../img/country/Ukraine.png",
      "../../img/country/Cyprus.png",
      "../../img/country/Japan.png",
      "../../img/country/France.png",
      "../../img/country/UK.png",
      "../../img/country/Colombia.png",
      "../../img/country/Italy.png",
      "../../img/country/Spain.png",
      "../../img/country/Norway.png",
      "../../img/country/China.png",
      "../../img/country/Isareal.png",
      "../../img/country/South-Korea.png",
      "../../img/country/Thailand.png",
      "../../img/country/India.png",
      "../../img/country/Sweden.png",
      "../../img/country/Vietnam.png",
      "../../img/country/Canada.png",
      "../../img/country/Singapore.png",
      "../../img/country/US.png",
      "../../img/country/Finland.png",
    ];

    const rows = [];
    for (const flagPath of flags) {
      const name = flagPath
        .split("/")
        [flagPath.split("/").length - 1].replace(".png", "");
      rows.push(
        <li className="col-span-1 text-left py-3 pl-4" key={`${name}`}>
          <img
            className="mx-4 inline-block"
            src={require(`../../img/country/${name}.png`)}
            alt={flagPath}
          />
          <p className="text-sm font-sans font-medium inline-block"> {name} </p>
        </li>
      );
    }
    return rows;
  }

  return (
    <div className="container-fluid py-16 mx-auto">
      <div className="grid justify-items-stretch">
        <h1 className="text-3xl md:text-6xl sm:text-4xl text-blue-400 font-mono font-extrabold">
          {" "}
          OUR CLIENTS{" "}
        </h1>
        <div
          className="bg-blue-400 justify-self-center rounded-lg mt-8"
          style={{ width: "300px", height: "10px" }}
        ></div>
      </div>
      <div className="flex justify-center leading-4 px-14 my-6">
        <div className="xl:w-1/2 md:w-full">
          <p className="text-xl md:text-2xl sm:text-3xl  font-extralight">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xs:grid-cols-1">
        <img
          className="map xl:col-span-1 md:col-span-2 xs:col-span-2 h-auto px-12 py-4 flex justify-center mx-auto"
          src={require("../../img/glassegg-client-map.png")}
          alt=""
        />
        <div className="flag xl:col-span-1 md:col-span-2 xs:col-span-2 px-12 py-4">
          <ul className="grid md:grid-cols-3 xs:grid-cols-1">
            {getFlagsRow()}
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <Slider
          {...settings}
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
        >
          <div className="ml-10">
            <img src={require("../../img/logo/ABOSO.png")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Activision.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Bandainamco.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Codemasters.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../img/logo/EA-1.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Firemonkeys.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/frontier-logo-1.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Gloops.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/GSE-Systems.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../img/logo/HUTCH.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Insomniac-games.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/iracing-logo-1.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Klab-Games.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Kwalee.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Natural-motion.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Piper-work.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/pixyda.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Playground.jpg")} alt="" />
          </div>
          <div>
            <img
              src={require("../../img/logo/RESPAWN-ENTERTAINMENT.jpg")}
              alt=""
            />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Saber-Interactive.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/SEGA-1.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Simbin.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/SMS.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/SONY-LOGO-1.png")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Sony.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/THQ-Nordic.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img
              src={require("../../img/logo/Three-fields-entertainment.jpg")}
              alt=""
            />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Treyarch.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Turn-10-1.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../img/logo/Ubisoft-1.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Wargaming-1.jpg")} alt="" />
          </div>
          <div className="ml-10">
            <img
              src={require("../../img/logo/Xbox-games-studios.jpg")}
              alt=""
            />
          </div>
          <div className="ml-10">
            <img src={require("../../img/logo/Zynga-1.jpg")} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
