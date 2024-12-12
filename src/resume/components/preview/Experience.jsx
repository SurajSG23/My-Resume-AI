import React, { useState, useEffect } from "react";

const Experience = ({ resumeInfo }) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (resumeInfo.experience.some((exp) => exp.company.trim() !== "")) {
      setFlag(true);
    }
  }, [resumeInfo.experience]);

  const returnHeading = () => {
    if (flag) {
      return (
        <>
          <div>
            <h1
              className="font-bold text-center"
              style={{ color: resumeInfo.personalInfo.themeColor || "black" }}
            >
              Professional Experience
            </h1>
          </div>
          <div
            className="h-[1px] border"
            style={{
              borderColor: resumeInfo.personalInfo.themeColor || "black",
              backgroundColor: resumeInfo.personalInfo.themeColor || "black",
            }}
          ></div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="pl-2">
      {returnHeading()}
      {resumeInfo.experience
        .filter((exp) => exp.company.trim() !== "")
        .map((exp) => (
          <div key={exp.id} className="my-2"> {/* Use exp.id for key */}
            <div className="flex justify-between">
              <div className="flex gap-1 pl-2">
                <div className="flex gap-1">
                  <p
                    className="font-bold"
                    style={{ color: resumeInfo.personalInfo.themeColor || "black" }}
                  >
                    {exp.company}
                  </p>
                  <div>{"|"}</div>
                </div>
                <div className="flex gap-1">
                  <p>{exp.position}</p>
                </div>
              </div>
              <div className="pr-2">
                <p>
                  ({exp.start} - {exp.end})
                </p>
              </div>
            </div>

            <div className="pl-2 pr-2">
              {/* Ensure description is valid before replacing text */}
              <p
                dangerouslySetInnerHTML={{
                  __html: exp.description
                    ? exp.description.replaceAll("*", "<br/>")
                    : "",
                }}
              ></p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Experience;
