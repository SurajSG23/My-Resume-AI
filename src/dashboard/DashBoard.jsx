import React from "react";
import Header from "../components/custom/Header";
import AddResume from "./components/AddResume";

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
      </div>
    </>
  );
};

export default DashBoard;
