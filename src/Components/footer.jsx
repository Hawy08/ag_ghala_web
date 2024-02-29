// import React from 'react'
// import App from "../App";
import logo from "../assets/Frame.png";
import arrow from "../assets/Vector (7).png";
import Application from "../assets/app.apk";

function Footer() {
  return (
    <div className="flex justify-center">
      <div className="md:w-4/5">
        <div className="md:flex border-t-4 border-black p-4 font-['Inria Sans']">
          <div className="text-left font-['Inria Sans'] font-light">
            <p className="text-2xl font-bold text-green-500">Join us</p>
            <p className="text-lg font-light grow shrink basis-0 text-neutral-900">
              Join AgroGhala today to champion for a hunger free Africa.
            </p>
          </div>
          <div className="flex-col items-center justify-center w-full my-4 text-left md:flex md:my-0">
            <p className="text-neutral-900 text-2xl font-bold font-['Inter']">
              Get in touch
            </p>
            <div>
              <ul className="text-left w-full my-2 font-['Inria Sans'] font-light">
                <li className="p-2" href="#">
                  <img
                    src={arrow}
                    width={8}
                    height={8}
                    className="inline-flex mx-2"
                  />
                  YouTube
                </li>
                <li className="p-2">
                  <img
                    src={arrow}
                    width={8}
                    height={8}
                    className="inline-flex mx-2"
                  />
                  LinkedIn
                </li>
                <li className="p-2">
                  <img
                    src={arrow}
                    width={8}
                    height={8}
                    className="inline-flex mx-2"
                  />
                  Twitter
                </li>
                <li className="p-2">
                  <img
                    src={arrow}
                    width={8}
                    height={8}
                    className="inline-flex mx-2"
                  />
                  Gmail
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="justify-between p-4 border-t-2 border-black md:flex">
          <img
            src={logo}
            alt="agroghala"
            width={150}
            className="hidden md:flex"
          />
          <div className=" px-6 py-1 bg-green-500 rounded-[22px] justify-center items-center  md:inline-flex">
            <div className="text-white text-base font-bold font-['Inter']">
              <a
                href={Application}
                download="Appfile"
                target="_blank"
                rel="noreferrer"
              >
                <p>Download</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
