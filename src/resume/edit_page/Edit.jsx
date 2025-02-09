import React, { useState, useEffect } from "react";
import FormSection from "../components/FormSection";
import PreviewSection from "../components/PreviewSection";
import { ResumeInfoContext } from "../../context/ResumeInfoContext";
import resumeData from "../../data/Dummy";
import { Button } from "../../components/ui/button";

const Edit = () => {
  const [resumeInfo, setResumeInfo] = useState(resumeData);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  //Code to prevent reload
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  //Code to make sure the user is using desktop or a monitor
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 1024) {
        setIsScreenSmall(true);
      } else {
        setIsScreenSmall(false);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isScreenSmall) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Switch to a laptop or desktop for optimal functionality.
          </h1>
          <p className="text-gray-700">
            This page is not accessible on small screens. Resize your window or
            switch to a larger device to continue.
          </p>
        </div>
      </div>
    );
  }

  //Code for printing the resume
  const printResume = () => {
    const printContents = document.getElementById("printable-resume").innerHTML;
    const styles = Array.from(document.styleSheets)
      .map((styleSheet) => {
        try {
          return Array.from(styleSheet.cssRules)
            .map((rule) => rule.cssText)
            .join("\n");
        } catch (err) {
          return "";
        }
      })
      .join("\n");

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
      <html>
        <head>
        <title>My Resume</title>
          <style>
            ${styles}
          </style>
        </head>
        <body>
          <div>${printContents}</div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="flex w-[90%] border my-5 mx-auto h-auto gap-5">
        <FormSection/>
        <PreviewSection />
      </div>
      <div className="my-5 text-center">
        <Button
          onClick={printResume}
          className="px-6 py-2 text-white rounded border"
        >
          Print Resume
        </Button>
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default Edit;
