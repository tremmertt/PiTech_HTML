/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./LastestNews.css";

export default function LastestNews() {
  function getPictures() {
    const rows = [];
    const images = [
      "/img/News/new1.png",
      "/img/News/new2.png",
      "/img/News/new3.png",
      "/img/News/new4.jpg",
      "/img/News/new5.png",
      "/img/News/new6.png",
      "/img/News/new7.jpg",
      "/img/News/new8.png",
    ];
    for (const image of images) {
      const name = image.split("/")[image.split("/").length - 1];
      // console.log("image", image);
      rows.push(
        <div key={name}>
          <div
            className="flex justify-center items-center mb-10 shadow-xl "
            key={name}
            style={{
              position: "relative",
              cursor: "pointer",
              // backgroundImage: `url(${image})`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
            }}
          >
            <div className=" news-wrapper">
              <img
                className="inner-imageNews"
                src={require("../../img/Careers/riot-games-tech-summit-2017-272.jpg")}
                alt=""
              />
            </div>
            <div
              className="text-left text-white sm:mx-auto"
              style={{
                position: "absolute",
                left: "10px",
                margin: "auto",
                bottom: "0",
                zIndex: "10",
              }}
            >
              <h3 className="font-mono text-xl sm:text-md font-thin ">
                {" "}
                FEB 23, 2022{" "}
              </h3>
              <p className="text-left"> pitest 5 </p>
              <small> pitest 5</small>
            </div>
          </div>
        </div>
      );
    }
    return rows;
  }

  return (
    <div className="container-fluid py-16 mx-auto sm:justify-start">
      <div className="grid justify-items-stretch">
        <h1 className="text-3xl md:text-6xl sm:text-4xl text-blue-400 font-mono font-extrabold">
          {" "}
          LATEST NEWS{" "}
        </h1>
        <div
          className="bg-blue-400 justify-self-center rounded-lg mt-8  "
          style={{ width: "300px", height: "8px" }}
        ></div>
      </div>

      <div className="px-2 md:px-24 sm:px-6 m-10 grid grid-cols-2">
        {/* <div className="col-start-1 col-span-2 md:col-span-2 grid grid-cols-2 sm:grid-cols-1 sm:col-span-1">
          <div
            className=" rounded-lg shadow-2xl cols-span-2 md:cols-span-1 sm:cols-span-2"
            style={{
              width: "100%",
              height: "350px",
              backgroundImage: `url(${"../../img/News/new1.png"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="cols-span-2 md:cols-span-2 sm:cols-span-2  text-left ml-3 mt-4 leading-loose">
            <h1 className="text-xl"> FEB 23, 2022</h1>
            <p className="text-lg"> pitest 5 </p>
            <p className="text-sm"> pitest 5</p>
          </div>
        </div> */}

        <div className="col-span-2 grid xl:grid-cols-3 mt-10 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {getPictures()}
        </div>
      </div>
    </div>
  );
}
