import React from "react";

const PersonalDetails = ({ resumeInfo }) => {
  return (
    <div className="">
      <div className="text-center mb-1">
        <h2
          className="text-3xl font-bold"
          style={{ color: resumeInfo.personalInfo.themeColor }}
        >
          {resumeInfo.personalInfo.name}
        </h2>
      </div>

      <div className="flex items-center gap-1 justify-center ">
        {resumeInfo.personalInfo.email && (
          <span className="text-gray-700">{resumeInfo.personalInfo.email}</span>
        )}
        {resumeInfo.personalInfo.phone && (
          <span className="text-gray-700">
            {"| +91 " + resumeInfo.personalInfo.phone}
          </span>
        )}
        {resumeInfo.personalInfo.linkedin && (
          <>
            <p>|</p>
            <a href={resumeInfo.personalInfo.linkedin}
            target="_blank"
              className="text-blue-500"
            >
              Linkedin
            </a>
          </>
        )}
        {resumeInfo.personalInfo.github && (
          <>
            <p>|</p>
            <a href={resumeInfo.personalInfo.github}
            target="_blank"
              className="text-blue-500"
            >
              Github
            </a>
          </>
        )}
        {resumeInfo.personalInfo.portfolio && (
          <>
            <p>|</p>
            <p className="text-blue-500">
              {resumeInfo.personalInfo.portfolio}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;
