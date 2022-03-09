import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Carousel() {
  const [curHeight, setCurrentHeight] = useState(window.innerHeight);
  const [curWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    // console.log("useEffect");
    const onResizeHeight = () => setCurrentHeight(window.innerHeight);
    const onResizeWidth = () => setCurrentWidth(window.innerWidth);
    // clean up code
    window.removeEventListener("resize", onResizeHeight);
    window.addEventListener("resize", onResizeHeight, { passive: true });

    window.removeEventListener("resize", onResizeWidth);
    window.addEventListener("resize", onResizeWidth, { passive: true });
    return () => {
      window.removeEventListener("resize", onResizeHeight);
      window.removeEventListener("resize", onResizeWidth);
    };
  }, []);

  console.log(curHeight, curWidth);
  return (
    <div className="container-fluid videoPlay ">
      <ReactPlayer
        url="https://www.glassegg.com/wp-content/themes/glassegg/assets/images/ge-intro.mp4"
        width={curWidth > 1024 ? curWidth : "100%"}
        height={curWidth > 1024 ? (curHeight > 850 ? 850 : curHeight) : "100%"}
        fluid="true"
        pip={true}
        playing={true}
        muted={true}
        loop={true}
      />
    </div>
  );
}
