import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { user, isSignedIn } = useUser();
  const location = useLocation();

  if(location.pathname=="/View"){
    return null;
  }
  const renderButtons = () => {
    switch (location.pathname) {
      case "/Dashboard":
        return (
          <div>
            <Link to="/">
              <Button>Back</Button>
            </Link>
          </div>
        );
      case "/Edit":
        return (
          <div>
            <Link to="/Dashboard">
              <Button className="border border-white"> Stop</Button>
            </Link>
          </div>
        );
      default:
        return (
          <div>
            <Link to="/Dashboard">
              <Button>Create Resume</Button>
            </Link>
          </div>
        );
    }
  };

  return (
    <>
      <div className="h-[8vh] w-[100vw] py-1 justify-between px-10 flex bg-black items-center">
        <div>
          <Link to={"/"}>
            <img src="SC-logo.png" alt="logo" width={160} />
          </Link>
        </div>

        {isSignedIn ? (
          <div className="flex gap-4 items-center justify-center">
            {renderButtons()}
            <div>
              <UserButton />
            </div>
          </div>
        ) : (
          <div>
            <Link to="/Sign-in">
              <Button>Get Started</Button>
            </Link>
          </div>
        )}
      </div>
      <div>
        <div className="h-[1px] w-[100vw] bg-gray-700"></div> 
      </div>
    </>
  );
};

export default Header;
