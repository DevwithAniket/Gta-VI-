import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

export default function App() {
  let [showContent, setshowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2.5,
      ease: "power4.easeinOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setshowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {

    if(!showContent) return;

    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut",

    });

    gsap.to(".sky",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut",

    });

    gsap.to(".bg",{
      scale:1.05,
      rotate:0,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut",

    });
    
    gsap.to(".character",{
      scale:0.7,
      x:"-50%",
      bottom:"-60%",
      rotate:0,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut",

    });

    gsap.to(".logo18",{
      scale:0.20,
      x:"-50%",
      bottom:"-21%",
      top:"170",
      rotate:0,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut",

    });

    gsap.to(".rockstar",{
      scale:0.10,
      x:"-50%",
      bottom:"-21%",
      top:"20",
      rotate:0,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut",

    });


    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1,
      });
    });
  }, [showContent]);

  return (
    <>
      {/* SVG mask effect */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 w-full h-screen overflow-hidden bg-black">
        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            <mask id="vimask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="400"
                  y="320"
                  fontSize="300"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black, sans-serif"
                  fontWeight="bold"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>

          {/* Placeholder image for demo */}
          <image
            href="./sky(3).png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#vimask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-10 h-1.5 bg-white"></div>
                  <div className="line w-8 h-1.5 bg-white"></div>
                  <div className="line w-6 h-1.5 bg-white"></div>
                </div>
                <h3 className="text-3xl text-white -mt-[9px] leading-none">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv overflow-hidden relative w-full h-screen">
              <img
                src="sky(3).png"
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                alt=""
              />
              <img
                className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-2 items-center absolute top-5 left-1/2 -translate-x-1/2">
                <h1 className="text-[8rem] leading-none -ml-50">grand</h1>
                <h1 className="text-[8rem] leading-none ml-50">theft</h1>
                <h1 className="text-[8rem] leading-none -ml-70">auto</h1>
              </div>
              <img
                className="logo18 absolute -bottom-[300%] left-250 -translate-x-1/2 scale-[0.25] rotate-[-20deg]"
                src="./logo18.png"
                alt=""
              />
              <img
                className="rockstar absolute -bottom-[300%] left-100 -translate-x-1/2 scale-[0.25] rotate-[-20deg]"
                src="./rockstar.png"
                alt=""
              />
              <img
                className="character absolute -bottom-[270%] left-1/2 -translate-x-1/2 scale-[2.3] rotate-[-20deg]"
                src="./girlbg(3).png"
                alt=""
              />
              
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-12 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-3xl ri-arrow-down-line"></i>
                <h3 className="text-md font-[Helvetica]">Scroll Down</h3>
              </div>

              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

          <div className="w-full h-screen flex items-center justify-center px-10 bg-black">
            <div className="container flex text-white w-full h-[90%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.75]"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-10">
                <h1 className="text-7xl ">Still Running</h1>
                <h1 className="text-7xl ">Not Hunting</h1>
                <p className="mt-6 font-[Helvetica]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam deserunt quidem impedit, consequuntur dignissimos, incidunt nostrum facilis atque sit, voluptatum tenetur exercitationem sed!</p>
                <p className="mt-3 font-[Helvetica]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, molestiae delectus. Delectus maiores tempore neque repudiandae inventore ex similique necessitatibus?.</p>
                <p className="mt-5 font-[Helvetica]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam esse perspiciatis, fugit dolorem quasi mollitia.</p>
                <button className="text-black bg-yellow-500 px-8 py-6 text-3xl mt-4">Download Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
