import React, { useEffect, useState } from "react";

const Projects = ({ resumeInfo }) => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (resumeInfo.projects.some((pro) => pro.name.trim() !== "")) {
      setFlag(true);
    }
  }, [resumeInfo.projects]);

  const returnHeading = () => {
    if (flag) {
      return (
        <>
          <div>
            <h1
              className="font-bold text-center"
              style={{ color: resumeInfo.personalInfo.themeColor }}
            >
              Projects
            </h1>
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
    <div>
      {returnHeading()}
      {resumeInfo.projects
        .filter((pro) => pro.name.trim() !== "")
        .map((exp, index) => (
          <div key={index} className="my-2">
            <div className="flex justify-between">
              <div className="flex gap-1 pl-2">
                <div className="flex gap-1">
                  <p
                    className="font-bold"
                    style={{ color: resumeInfo.personalInfo.themeColor }}
                  >
                    {exp.name}
                  </p>
                  <div>{"|"}</div>
                </div>
                <div className="flex gap-1">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Project Link
                  </a>
                </div>
              </div>
            </div>
            <div className="pl-2 pr-2">
              <p
                dangerouslySetInnerHTML={{
                  __html: exp.description.replaceAll("*", "<br/>"),
                }}
              ></p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Projects;
