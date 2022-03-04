/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    // <footer className="footer text-white bg-blue-600 body-font z-30 ">
    //   <div className="container px-5 py-16 mx-auto flex lg:items-center md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    //     <div className="lg:w-1/5 sm:w-1/2 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left leading-loose">
    //       <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    //         <img
    //           className="h-auto w-1/4"
    //           src={require("../../img/light-2.png")}
    //           alt=""
    //         />
    //         <span className="ml-4 mb-18 text-2xl text-white">PI TECH</span>
    //       </a>
    //       <p className="text-md font-extralight py-3">
    //         Pi Solution là công ty hàng đầu cung cấp giải pháp công nghệ,
    //         marketing và dịch vụ sản xuất trong nhiều lĩnh vực{" "}
    //       </p>
    //       <h4 className="text-md font-extralight pb-2"> PI SOLUTION </h4>
    //       <p className="text-md font-light pb-2">
    //         {" "}
    //         SÁNG TẠO - CHẤT LƯỢNG - UY TÍN{" "}
    //       </p>
    //     </div>
    //     <div className="flex-grow flex flex-wrap md:pl-10 -mb-10 md:mt-0 mt-10 md:text-left text-center ml-10">
    //       {/* <div className="lg:w-1/4 sm:w-1/2 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left leading-loose">
    //         <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    //           <img
    //             className="h-auto w-1/4"
    //             src={require("../../img/light-2.png")}
    //             alt=""
    //           />
    //           <span className="ml-4 mb-18 text-2xl text-white">PI TECH</span>
    //         </a>
    //         <p className="text-md font-extralight py-3">
    //           Pi Solution là công ty hàng đầu cung cấp giải pháp công nghệ,
    //           marketing và dịch vụ sản xuất trong nhiều lĩnh vực{" "}
    //         </p>
    //         <h4 className="text-md font-extralight pb-2"> PI SOLUTION </h4>
    //         <p className="text-md font-light pb-2">
    //           {" "}
    //           SÁNG TẠO - CHẤT LƯỢNG - UY TÍN{" "}
    //         </p>
    //       </div> */}
    //       <div className="lg:w-1/5 sm:w-1/2 w-full px-6 text-center leading-10">
    //         <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 ">
    //           CATEGORIES
    //         </h2>
    // <nav className="list-none mb-10">
    //   <li className="hover:font-extrabold hover:text-md">
    //     <Link to="/" className="text-white ">
    //       Home
    //     </Link>
    //   </li>
    //   <li className="hover:font-extrabold hover:text-md">
    //     <Link to="/about" className="text-white ">
    //       About
    //     </Link>
    //   </li>
    //   <li className="hover:font-extrabold hover:text-md">
    //     <Link to="/service" className="text-white">
    //       Service
    //     </Link>
    //   </li>
    //   <li className="hover:font-extrabold hover:text-md">
    //     <Link to="/product" className="text-white">
    //       Portfolio
    //     </Link>
    //   </li>
    //   <li className="hover:font-extrabold hover:text-md">
    //     <Link to="/news" className="text-white">
    //       News
    //     </Link>
    //   </li>
    //   <li className="hover:font-extrabold hover:text-md">
    //     <Link to="/career" className="text-white">
    //       Career
    //     </Link>
    //   </li>
    //   <li className="hover:font-extrabold hover:text-md">
    //     <Link to="/contact" className="text-white">
    //       Contact
    //     </Link>
    //   </li>
    // </nav>
    //       </div>

    //       <div className="lg:w-2/5 sm:w-2/3 w-full px-2 text-left leading-10">
    //         <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 text-center">
    //           CATEGORIES
    //         </h2>
    // <nav className="list-none   mb-10">
    //   <li>
    //     <div className="flex">
    //       <img
    //         className="w-auto h-7 mt-2 pr-3"
    //         src={require("../../img/Footer/home.png")}
    //         alt=""
    //       />
    //       <span>
    //         {" "}
    //         <strong> Địa chỉ: </strong> 15 Vườn Lài, Phú Thọ Hòa, Tân
    //         Phú, Thành phố Hồ Chí Minh
    //       </span>
    //     </div>
    //   </li>
    //   <li>
    //     <div className="flex">
    //       <img
    //         className="w-auto h-7 mt-2 pr-3"
    //         src={require("../../img/Footer/mail.png")}
    //         alt=""
    //       />
    //       <span>
    //         {" "}
    //         <strong> Email: </strong> Info.Pisolution@gmail.com
    //       </span>
    //     </div>
    //   </li>
    //   <li>
    //     <div className="flex">
    //       <img
    //         className="w-auto h-7 mt-2 pr-3"
    //         src={require("../../img/Footer/phone-call.png")}
    //         alt=""
    //       />
    //       <span>
    //         {" "}
    //         <strong> Số điện thoại: </strong> 0909926677
    //       </span>
    //     </div>
    //   </li>
    // </nav>
    //       </div>

    //       <div className="lg:w-52 sm:w-1/2 w-full px-10">
    //         <h2 className="title-font font-medium text-white tracking-widest text-sm mb-8">
    //           SOCIAL
    //         </h2>
    // <nav className="list-none mb-10 ">
    //   <li className="flex justify-center xs:justify-start">
    //     <div className="my-5 text-white">
    //       <a>
    //         <svg
    //           fill="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           className="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    //         </svg>
    //       </a>
    //     </div>
    //   </li>
    //   <li className="flex justify-center xs:justify-start">
    //     <div className="text-white my-5 ">
    //       <a>
    //         <svg
    //           fill="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           className="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    //         </svg>
    //       </a>
    //     </div>
    //   </li>
    //   <li className="flex justify-center xs:justify-start">
    //     <div className="text-white my-5">
    //       <a>
    //         <svg
    //           fill="none"
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           className="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    //           <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
    //         </svg>
    //       </a>
    //     </div>
    //   </li>
    //   <li className="flex justify-center xs:justify-start">
    //     <div className="text-white mb-5">
    //       <a>
    //         <svg
    //           fill="currentColor"
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={0}
    //           className="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <path
    //             stroke="none"
    //             d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
    //           />
    //           <circle cx={4} cy={4} r={2} stroke="none" />
    //         </svg>
    //       </a>
    //     </div>
    //   </li>
    // </nav>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="text-white bg-blue-600 body-font">
      <div className="container px-6 py-18 mx-auto">
        <div className="flex flex-wrap md:text-left text-center ">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center leading-10">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li className="hover:font-extrabold hover:text-md">
                <Link to="/" className="text-white ">
                  Home
                </Link>
              </li>
              <li className="hover:font-extrabold hover:text-md">
                <Link to="/about" className="text-white ">
                  About
                </Link>
              </li>
              <li className="hover:font-extrabold hover:text-md">
                <Link to="/service" className="text-white">
                  Service
                </Link>
              </li>
              <li className="hover:font-extrabold hover:text-md">
                <Link to="/product" className="text-white">
                  Portfolio
                </Link>
              </li>
              <li className="hover:font-extrabold hover:text-md">
                <Link to="/news" className="text-white">
                  News
                </Link>
              </li>
              <li className="hover:font-extrabold hover:text-md">
                <Link to="/career" className="text-white">
                  Career
                </Link>
              </li>
              <li className="hover:font-extrabold hover:text-md">
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center leading-10">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <div>
                  <img
                    className="w-auto h-6 mt-2 pr-3"
                    src={require("../../img/Footer/home.png")}
                    alt=""
                  />
                  <span>
                    {" "}
                    <strong> Địa chỉ: </strong> 15 Vườn Lài, Phú Thọ Hòa, Tân
                    Phú, Thành phố Hồ Chí Minh
                  </span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <img
                    className="w-auto h-6 mt-2 pr-3"
                    src={require("../../img/Footer/mail.png")}
                    alt=""
                  />
                  <span>
                    {" "}
                    <strong> Email: </strong> Info.Pisolution@gmail.com
                  </span>
                </div>
              </li>
              <li>
                <div className="flex">
                  <img
                    className="w-auto h-6 mt-2 pr-3"
                    src={require("../../img/Footer/phone-call.png")}
                    alt=""
                  />
                  <span>
                    {" "}
                    <strong> Số điện thoại: </strong> 0909926677
                  </span>
                </div>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center leading-10">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              SOCIAL
            </h2>
            <nav className="list-none mb-10 ">
              <li className="flex justify-center xs:justify-start">
                <div className="my-5 text-white">
                  <a>
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                </div>
              </li>
              <li className="flex justify-center xs:justify-start">
                <div className="text-white my-5 ">
                  <a>
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                </div>
              </li>
              <li className="flex justify-center xs:justify-start">
                <div className="text-white my-5">
                  <a>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                </div>
              </li>
              <li className="flex justify-center xs:justify-start">
                <div className="text-white mb-5">
                  <a>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      />
                      <circle cx={4} cy={4} r={2} stroke="none" />
                    </svg>
                  </a>
                </div>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-7 text-left xs:text-center leading-loose order-first">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                className="h-auto xs:w-20 w-1/4"
                src={require("../../img/light-2.png")}
                alt=""
              />
              <span className="ml-4 mb-18 text-2xl text-white">PI TECH</span>
            </a>
            <p className="text-md font-extralight py-3">
              Pi Solution là công ty hàng đầu cung cấp giải pháp công nghệ,
              marketing và dịch vụ sản xuất trong nhiều lĩnh vực{" "}
            </p>
            <h4 className="text-md font-extralight pb-2"> PI SOLUTION </h4>
            <p className="text-md font-light pb-2">
              {" "}
              SÁNG TẠO - CHẤT LƯỢNG - UY TÍN{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
