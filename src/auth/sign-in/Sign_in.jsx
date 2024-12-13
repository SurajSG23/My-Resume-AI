import { SignIn } from "@clerk/clerk-react";
import React from "react";
import Header from "@/components/custom/Header";
import { FaLinkedin } from "react-icons/fa";

const Signin = () => {
  return (
    <>
      {/* Header */}
      <div className="relative z-10 bg-gray-900">
        <Header />
      </div>
      <div
        className="h-[92vh] flex flex-col justify-center items-center bg-cover bg-center bg-black"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1920x1080/?technology,office')",
        }}
      >
        <div>
          <SignIn />
        </div>
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

export default Signin;
