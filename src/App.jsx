import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Header from "./components/custom/Header";
import DashBoard from "./dashboard/DashBoard";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/Sign-in"} />;
  }

  return (
    <>
    <Header/>
    <Outlet />
    </>
  );
}

export default App;
