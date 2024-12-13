import React from "react";
import Header from "../components/custom/Header";
import AddResume from "./components/AddResume";
import { FaLinkedin } from "react-icons/fa";

const DashBoard = () => {
  return (
    <>
      <div
        className="h-[92vh] flex flex-col justify-center  bg-cover bg-center relative px-2 bg-black items-center text-center "
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1920x1080/?office,workspace')",
        }}
      >
        <h2 className="text-4xl font-extrabold text-white drop-shadow-lg leading-snug">
          My Resume
        </h2>
        <p className="text-lg text-gray-300  max-w-2xl">
          Create your AI-powered, ATS-friendly <b>Resume</b>. Use cutting-edge
          tools to craft a professional resume that stands out!
        </p>

        <div className="w-auto">
          <AddResume />
        </div>
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-blue-500 opacity-50 blur-xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-purple-600 opacity-50 blur-2xl animate-pulse"></div>
        <footer className="w-full bg-black py-4 mt-8 flex items-center justify-between text-gray-400 px-8 absolute bottom-0">
          <div>&copy; 2024 MyResume.ai. All Rights Reserved.</div>
          <div className="flex gap-4">
            <p></p>
            <a
              href="https://www.instagram.com/suraj_sg23/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 hover:scale-110"
            >
              @Suraj_sg23
            </a>
            <a
              href="https://www.linkedin.com/in/suraj-s-g-dhanva-995a23298/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DashBoard;
