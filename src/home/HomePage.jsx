import React from "react";
import Header from "../components/custom/Header";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const HomePage = () => {
  const { user, isSignedIn } = useUser();

  return (
    <>
      <div className="relative z-10 bg-gray-900">
        <Header />
      </div>
      {!isSignedIn ? (
        <div
          className="h-[92vh] flex flex-col justify-center items-center text-center bg-cover bg-center relative bg-black"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1920x1080/?technology,abstract')",
          }}
        >
          <h1 className="text-5xl font-extrabold text-purple-500 drop-shadow-lg leading-snug ">
            Welcome to MyResume.ai
          </h1>
          <h2 className="text-3xl font-bold text-white drop-shadow-lg leading-snug mt-2">
            Your Future Starts Here
          </h2>
          <p className="text-md text-gray-300 mt-4 max-w-3xl">
            Build an ATS-friendly, professional resume that showcases your
            skills and helps you stand out. Let AI do the heavy lifting!
          </p>
          <div className="mt-8">
            <Link to="/Sign-in">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                Get Started
              </button>
            </Link>
          </div>
          <div className="absolute top-10 left-5 w-20 h-20 rounded-full bg-blue-500 opacity-50 blur-xl animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-purple-600 opacity-50 blur-2xl animate-pulse"></div>
        </div>
      ) : (
        <div className="h-[92vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-900 via-gray-900 to-black relative">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg leading-snug">
            Welcome Back, {user.firstName || "User"}!
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl">
            Dive back into building your professional, AI-powered resume.
            Showcase your skills and achievements like never before!
          </p>
          <div className="mt-8">
            <Link to="/Dashboard">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                Create Your Resume
              </button>
            </Link>
          </div>
          <div className="absolute top-16 left-10 w-28 h-28 rounded-full bg-blue-500 opacity-50 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-16 w-36 h-36 rounded-full bg-purple-600 opacity-50 blur-3xl animate-bounce"></div>
        </div>
      )}
    </>
  );
};

export default HomePage;
