// import React from 'react'
// import App from "../App";
import logo from "../assets/Frame.png";
import arrow from "../assets/Vector (7).png";
import Application from "../assets/app.apk";

function Footer() {
  return (
    <div>
      <div className="md:flex border-t-4 border-black p-4 font-['Inria Sans']">
        <div className="text-left font-['Inria Sans'] font-light">
          <p className="text-green-500 text-2xl font-bold">Join us</p>
          <p className="grow shrink basis-0 text-neutral-900 text-lg  font-light">
            Join AgroGhala today to champion for a hunger free Africa.
          </p>
        </div>
        <div className="md:flex justify-center items-center flex-col text-left w-full my-4 md:my-0">
          <p className="text-neutral-900 text-2xl font-bold font-['Inter']">
            Get in Touch
          </p>
          <div>
            <ul className="text-left w-full my-2 font-['Inria Sans'] font-light">
              <li className="p-2">
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
      <div className="border-t-2 border-black p-4 md:flex justify-between">
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
  );
}

export default Footer;
