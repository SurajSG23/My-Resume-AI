import { SignIn } from "@clerk/clerk-react";
import React from "react";
import Header from "@/components/custom/Header";

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
      </div>
    </>
  );
};

export default Signin;
