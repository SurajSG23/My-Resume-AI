import React, { useEffect, useState } from "react";

const Summary = ({ resumeInfo }) => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (resumeInfo.summaries.some((sum) => sum.summary.trim() !== "")) {
      setFlag(true);
    }
  }, [resumeInfo.summaries]);
  const returnHeading = () => {
    if (flag) {
      return (
        <>
          <div>
            <h1
              className="font-bold text-center"
              style={{ color: resumeInfo.personalInfo.themeColor }}
            >
              Summary
            </h1>
          </div>
          <div
            className="h-[1px] border "
            style={{
              borderColor: resumeInfo.personalInfo.themeColor,
              backgroundColor: resumeInfo.personalInfo.themeColor,
            }}
          ></div>
        </>
      );
    }
    return null;
  };
  return (
    <div>
      {returnHeading()}
      <div className="w-[100%] text-center mx-auto mt-2">
        {resumeInfo.summaries
          .filter((pro) => pro.summary.trim() !== "")
          .map((exp, index) => (
            <div key={index}>
              <p>{exp.summary}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Summary;
