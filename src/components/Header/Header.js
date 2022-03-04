/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

/**
 * Function converts path like /user/123 to /user/:id
 */
const getRoutePath = (location, params) => {
  const { pathname } = location;

  if (!Object.keys(params).length) {
    return pathname; // we don't need to replace anything
  }

  let path = pathname;
  Object.entries(params).forEach(([paramName, paramValue]) => {
    if (paramValue) {
      path = path.replace(paramValue, `:${paramName}`);
    }
  });
  return path;
};

export default function Header(props) {
  const [offset, setOffset] = useState(window.pageYOffset);
  const [curWidth, setCurrentWidth] = useState(window.innerWidth);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const location = useLocation();
  const params = useParams();
  const path = getRoutePath(location, params);
  // console.log("path", path);

  function isLargeScreen() {
    return curWidth <= 1000 ? false : true;
  }

  function scrollToTop() {
    props.scrollToTop(10);
    setIsOpenDrawer(false);
  }

  useEffect(() => {
    // console.log("useEffect");
    const onScroll = () => setOffset(window.pageYOffset);
    const onResizeWidth = () => setCurrentWidth(window.innerWidth);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResizeWidth);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResizeWidth, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResizeWidth);
    };
  }, []);

  // console.log("scroll", offset, curWidth);

  function showHeaderNormal() {
    return (
      <nav
        style={{
          height: offset == 0 ? "80px" : "60px",
          transition: "all 0.5s ease-in-out",
        }}
        className="px-16  flex flex-row items-center shadow-md justify-around"
      >
        <NavLink
          to="/"
          onClick={scrollToTop}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            className=" w-auto"
            style={{ height: offset == 0 ? "50px" : "40px" }}
            src={require("../../img/blue-2.png")}
            alt="logo"
          />
        </NavLink>
        <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-md font-semibold justify-center">
          <li onClick={scrollToTop}>
            <NavLink
              to="/"
              className={
                path == "/"
                  ? "active-header mr-8 hover:text-gray-900"
                  : "mr-8 hover:text-gray-900"
              }
            >
              {" "}
              HOME{" "}
            </NavLink>
          </li>
          <li onClick={scrollToTop}>
            <NavLink
              to="/about"
              className={
                path == "/about"
                  ? "active-header mr-8 hover:text-gray-900"
                  : "mr-8 hover:text-gray-900"
              }
            >
              {" "}
              ABOUT{" "}
            </NavLink>
          </li>
          <li onClick={scrollToTop}>
            <NavLink
              to="/service"
              className={
                path == "/service"
                  ? "active-header mr-8 hover:text-gray-900"
                  : "mr-8 hover:text-gray-900"
              }
            >
              {" "}
              SERVICE{" "}
            </NavLink>
          </li>
          <li onClick={scrollToTop}>
            <NavLink
              to="/product"
              className={
                path == "/product"
                  ? "active-header mr-8 hover:text-gray-900"
                  : "mr-8 hover:text-gray-900"
              }
            >
              {" "}
              PORTFOLIO{" "}
            </NavLink>
          </li>
          <li onClick={scrollToTop}>
            <NavLink
              to="/news"
              className={
                path == "/news"
                  ? "active-header mr-8 hover:text-gray-900"
                  : "mr-8 hover:text-gray-900"
              }
            >
              {" "}
              NEWS{" "}
            </NavLink>
          </li>
          <li onClick={scrollToTop}>
            <NavLink
              to="/careers"
              className={
                path == "/careers"
                  ? "active-header mr-8 hover:text-gray-900"
                  : "mr-8 hover:text-gray-900"
              }
            >
              {" "}
              CAREERS{" "}
            </NavLink>
          </li>
          <li onClick={scrollToTop}>
            <NavLink
              to="/contact"
              className={
                path == "/contact"
                  ? "active-header mr-8 hover:text-gray-900"
                  : "mr-8 hover:text-gray-900"
              }
            >
              {" "}
              CONTACT{" "}
            </NavLink>
          </li>
        </ul>
        <button className="inline-flex items-center outline outline-offset-2 outline-1 outline-blue-400 border-0 py-1 px-3 focus:outline-none hover:outline-blue-900 hover:outline-2 rounded text-base  ">
          {" "}
          English
          <div className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>
      </nav>
    );
  }

  function showHeaderSmall() {
    return (
      <nav
        style={{
          height: offset == 0 ? "80px" : "60px",
          transition: "all 0.5s ease-in-out",
        }}
        className="md:px-14 sm:px-4 px-4  flex flex-row items-center shadow-md justify-between"
      >
        <a className="flex title-font font-medium py-auto items-center text-gray-900 ">
          <img
            className=" w-auto mx-auto"
            style={{ height: offset == 0 ? "50px" : "40px" }}
            src={require("../../img/blue-2.png")}
            alt="logo"
          />
        </a>

        <button
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
          className="inline-flex items-center  text-base  "
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    );
  }

  function drawerNavigation() {
    return (
      <nav
        className={
          isOpenDrawer
            ? "navbar-open navbar w-64 absolute overflow-x-scroll bg-gray-700 top-0 h-screen"
            : "navbar-close navbar w-64 absolute overflow-x-scroll bg-gray-700 top-0 h-screen"
        }
      >
        <div className="flex pr-2 justify-end">
          <button
            onClick={() => setIsOpenDrawer(false)}
            className="p-2 text-white text-xl font-bold"
          >
            &#9747;
          </button>
        </div>

        <ul className="list-none text-white text-center">
          <li className="my-8">
            <Link onClick={scrollToTop} to="/">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li className="my-8">
            <Link onClick={scrollToTop} to="/about">
              {" "}
              About{" "}
            </Link>
          </li>
          <li className="my-8">
            <Link onClick={scrollToTop} to="/service">
              {" "}
              Service{" "}
            </Link>
          </li>
          <li className="my-8">
            <Link onClick={scrollToTop} to="/product">
              {" "}
              Portfolio{" "}
            </Link>
          </li>
          <li className="my-8">
            <Link onClick={scrollToTop} to="/news">
              {" "}
              News{" "}
            </Link>
          </li>
          <li className="my-8">
            <Link onClick={scrollToTop} to="/careers">
              {" "}
              Careers{" "}
            </Link>
          </li>
          <li className="my-8">
            <Link onClick={scrollToTop} to="/contact">
              {" "}
              Contact{" "}
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <header
      className={
        offset == 0
          ? "header text-gray-600 body-font "
          : "header fix-header text-gray-600 body-font fix-header"
      }
    >
      {drawerNavigation()}
      {isLargeScreen() ? showHeaderNormal() : showHeaderSmall()}
    </header>
  );
}
