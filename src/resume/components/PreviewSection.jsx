import React, { useContext } from "react";
import { ResumeInfoContext } from "../../context/ResumeInfoContext";
import PersonalDetails from "./preview/PersonalDetails";
import Summary from "./preview/Summary";
import Experience from "./preview/Experience";
import Education from "./preview/Education";
import Projects from "./preview/Projects";
import Skills from "./preview/Skills";
import LangAndHobbies from "./preview/LangAndHobbies";
import Certificates from "./preview/Certificates";

const PreviewSection = ({ printResume }) => {
  const { resumeInfo } = useContext(ResumeInfoContext);

  return (
    <div className="border border-black w-[45vw] h-[85vh] overflow-y-auto relative flex flex-col justify-between">
      <div
        id="printable-resume"
        className="flex flex-col h-full"
        style={{ width: "100%" }}
      >
        {/* Top Border */}
        <div
          className="h-[20px]"
          style={{
            borderColor: resumeInfo.personalInfo.themeColor,
            backgroundColor: resumeInfo.personalInfo.themeColor,
          }}
        >
          <div
            className="h-[20px]"
            style={{ backgroundColor: resumeInfo.personalInfo.themeColor }}
          ></div>
        </div>

        {/* Content Section */}
        <div className="flex-grow">
          <div>
            <PersonalDetails resumeInfo={resumeInfo} />
          </div>

          <div className="pb-4">
            <Summary resumeInfo={resumeInfo} />
          </div>

          <div>
            <Experience resumeInfo={resumeInfo} />
          </div>

          <div>
            <Education resumeInfo={resumeInfo} />
          </div>

          <div>
            <Projects resumeInfo={resumeInfo} />
          </div>

          <div>
            <Skills resumeInfo={resumeInfo} />
          </div>

          <div>
            <LangAndHobbies resumeInfo={resumeInfo} />
          </div>

          <div>
            <Certificates resumeInfo={resumeInfo} />
          </div>
        </div>

        {/* Bottom Border */}
        <div
          className="h-[20px] mt-auto"
          style={{
            borderColor: resumeInfo.personalInfo.themeColor,
            backgroundColor: resumeInfo.personalInfo.themeColor,
          }}
        >
          <div
            className="h-[20px]"
            style={{ backgroundColor: resumeInfo.personalInfo.themeColor }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
