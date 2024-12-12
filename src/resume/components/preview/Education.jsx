import React, { useEffect, useState } from "react";

const Education = ({ resumeInfo }) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (resumeInfo.education.some((edu) => edu.school.trim() !== "")) {
      setFlag(true);
    }
  }, [resumeInfo.education]);

  const returnHeading = () => {
    if (flag) {
      return (
        <>
          <div>
            <h1
              className="font-bold text-center"
              style={{ color: resumeInfo.personalInfo.themeColor }}
            >
              Education
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
    <div className="pl-2">
      {returnHeading()}
      {resumeInfo.education
        .filter((edu) => edu.school.trim() !== "")
        .map((exp, index) => (
          <div key={index} className="my-2">
            <div className="flex justify-between">
              <div className="gap-1 pl-2 ">
                <div>
                  <p
                    className="font-bold"
                    style={{ color: resumeInfo.personalInfo.themeColor }}
                  >
                    {exp.school}
                  </p>
                </div>
                <div className="flex gap-1 underline font-light">
                  <p>{exp.degree}</p>
                </div>
              </div>
              <div>
                <div className="pr-2">
                  <p>
                    ({exp.start} - {exp.end})
                  </p>
                </div>
                <div>
                  <p className="text-center">{exp.city}</p>
                </div>
              </div>
            </div>
            <div className="pl-2 pr-2">
              <p>&#x2022; {exp.grade}%</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Education;
