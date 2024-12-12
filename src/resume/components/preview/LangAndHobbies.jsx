import React, { useEffect, useState } from "react";

const LangAndHobbies = ({ resumeInfo }) => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (resumeInfo.languages.some((lan) => lan.language.trim() !== "")) {
      setFlag(true);
    }
  }, [resumeInfo.languages]);
  const returnHeading = () => {
    if (flag) {
      return (
        <>
          <div className="flex w-[90%] mx-auto justify-between px-10 mt-5">
            <div>
              <h1
                className="font-bold text-center"
                style={{ color: resumeInfo.personalInfo.themeColor }}
              >
                Languages
              </h1>
            </div>
            <div>
              <h1
                className="font-bold text-center"
                style={{ color: resumeInfo.personalInfo.themeColor }}
              >
                hobbies
              </h1>
            </div>
          </div>
          <div
            className="h-[1px] border"
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
    <>
      {returnHeading()}
      <div className="flex w-[90%] mx-auto justify-between px-3 pt-2">
        <div>
          {resumeInfo.languages
            .filter((lan) => lan.language.trim() !== "")
            .map((exp, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <p
                  className="font-bold"
                  style={{ color: resumeInfo.personalInfo.themeColor }}
                >
                  {exp.language}
                </p>
                <span
                  className={`px-2 py-1 text-xs rounded-full text-black font-bold ${
                    exp.proficiency === "Fluent"
                      ? "bg-green-500"
                      : exp.proficiency === "Intermediate"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
                >
                  {exp.proficiency}
                </span>
              </div>
            ))}
        </div>
        <div>
          {resumeInfo.hobbies
            .filter((hob) => hob.name.trim() !== "")
            .map((hobb, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <p
                className="font-bold"
                style={{ color: resumeInfo.personalInfo.themeColor }}
              >
                {hobb.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LangAndHobbies;
