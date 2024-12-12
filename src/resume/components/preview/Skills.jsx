import React, { useEffect, useState } from "react";

const Skills = ({ resumeInfo }) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (resumeInfo.skills.some((skill) => skill.skill.trim() !== "")) {
      setFlag(true);
    }
  }, [resumeInfo.skills]);

  const returnHeading = () => {
    if (flag) {
      return (
        <>
          <div>
            <h1
              className="font-bold text-center"
              style={{ color: resumeInfo.personalInfo.themeColor }}
            >
              Skills
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
      <div className="h-auto flex flex-wrap w-[90%] mx-auto gap-2 my-4 justify-center">
        {resumeInfo.skills
          .filter((skill) => skill.skill.trim() !== "")
          .map((exp, index) => (
            <div key={index} className="w-[15vw]">
              <div className="flex justify-end">
                <div className="flex pl-2 items-center gap-2">
                  <div>
                    <p
                      className="font-bold"
                      style={{ color: resumeInfo.personalInfo.themeColor }}
                    >
                      {exp.skill}
                    </p>
                  </div>
                  <div className="h-4 w-[120px] bg-gray-400">
                    <div
                      className="h-4 flex justify-center items-center"
                      style={{
                        width: exp.score + "%",
                        backgroundColor: resumeInfo.personalInfo.themeColor,
                      }}
                    >
                      <p className="text-white text-[12px]">{exp.score + "%"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
