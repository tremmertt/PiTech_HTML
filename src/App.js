import "./App.css";
import "./Responsive.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Product from "./pages/Product/Product";
import News from "./pages/News/News";
import Careers from "./pages/Hiring/Careers";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import { useEffect, useState } from "react";
import DetailCareer from "./components/TableCareer/DetailCareer";
import DetailNews from "./components/News/DetailNews";

function App() {
  const [offset, setOffset] = useState(window.pageYOffset);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentWidthScreen = window.innerWidth;
  const location = window.location;
  console.log(location.pathname);

  // function HomeButton() {
  //   let history = useHistory();

  //   function handleClick() {
  //     history.push("/home");
  //   }
  // }

  // const getRoutePath = (location, params) => {
  //   const { pathname } = location;

  //   if (!Object.keys(params).length) {
  //     return pathname; // we don't need to replace anything
  //   }

  //   let path = pathname;
  //   Object.entries(params).forEach(([paramName, paramValue]) => {
  //     if (paramValue) {
  //       path = path.replace(paramValue, `:${paramName}`);
  //     }
  //   });
  //   return path;
  // };

  useEffect(() => {
    // console.log("useEffect");
    const onScroll = () => {
      setIsScrolled(true);
      setOffset(window.pageYOffset);
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function isDisplayHeader() {
    //     - màn hình nhỏ hơn 1024
    if (currentWidthScreen < 1024) {
      return true;
    } else {
      if (isScrolled) {
        return true;
      } else {
        // - manf hinhf lon hon 1024
        // - vừa vào màn hìn - chưa scroll lần nào
        // - phải ở trang home
        if (location.pathname !== "/") {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
      scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
      }, 15);
  }

  return (
    <div
      className="App container-fluid overflow-hidden"
      // style={{ overflowX: "hidden" }}
    >
      {" "}
      {offset === 0 ? (
        <div></div>
      ) : (
        <button
          onClick={() => {
            scrollToTop(400);
          }}
          className="w-12 h-12 bg-blue-400 z-50 fixed bottom-4 right-4 shadow-xl border-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
      <Router>
        {isDisplayHeader() ? (
          <Header className="w-screen" scrollToTop={scrollToTop} />
        ) : (
          <div></div>
        )}
        <Routes>
          <Route path="/" element={<Home />} animate={true} />
          <Route path="/about" element={<About />} animate={true} />
          <Route path="/service" element={<Service />} animate={true} />
          <Route path="/product" element={<Product />} animate={true} />
          <Route path="/news" element={<News />} animate={true} />
          <Route path="/detailnews" element={<DetailNews />} animate={true} />
          <Route path="/careers" element={<Careers />} animate={true} />
          <Route path="/detail" element={<DetailCareer />} animate={true} />
          <Route path="/contact" element={<Contact />} animate={true} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
