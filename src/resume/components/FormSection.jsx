import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PersonalForm from "./form/PersonalForm";
import { Button } from "/src/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Summary from "./form/SummaryForm";
import ExperienceForm from "./form/ExperienceForm";
import ProjectsForm from "./form/ProjectsForm";
import SkillsForm from "./form/SkillsForm";
import LangAndHobbiesForm from "./form/LangAndHobbiesForm";
import CertificatesForm from "./form/CertificatesForm";
import EducationForm from "./form/EducationForm";
import { ResumeInfoContext } from "../../context/ResumeInfoContext";
import * as Dialog from "@radix-ui/react-dialog";

const FormSection = ({ setPageCount }) => {
  const location = useLocation();
  const { resumeTitle } = location.state || { resumeTitle: "" };
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const handleColorChange = (color) => {
    setResumeInfo({
      ...resumeInfo,
      personalInfo: {
        ...resumeInfo.personalInfo,
        themeColor: color,
      },
    });
  };
  const displayComponent = (index) => {
    switch (index) {
      case 1:
        return <PersonalForm />;
      case 2:
        return <Summary />;
      case 3:
        return <ExperienceForm />;
      case 4:
        return <EducationForm />;
      case 5:
        return <ProjectsForm />;
      case 6:
        return <SkillsForm />;
      case 7:
        return <LangAndHobbiesForm />;
      case 8:
        return <CertificatesForm setPageCount={setPageCount} />;
      default:
        return null;
    }
  };

  return (
    <div className="border border-black w-[45vw] h-[85vh] rounded-lg text-center">
      <div className="flex justify-center items-center pb-3">
        <h1 className="font-bold text-xl">{resumeTitle}</h1>
      </div>

      <div className="flex justify-between px-20">
        <div className="border border-black rounded-lg">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button variant="ghost" className="hover:scale-105">
                <LayoutGrid />
                Theme
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
              <Dialog.Content className="fixed top-[30%] left-[50%] transform -translate-x-[50%] bg-white p-4 rounded-lg w-[400px]">
                <Dialog.Title className="text-lg font-semibold mb-4">
                  Select Theme Color
                </Dialog.Title>
                <div className="flex justify-between gap-2 ">
                  {[
                    "blue",
                    "#ff5e2d",
                    "green",
                    "#ff9500",
                    "purple",
                    "#ff00e6",
                    "#00bcd4",
                    "red",
                  ].map((color) => (
                    <div
                      key={color}
                      className="cursor-pointer ease-in-out duration-200 hover:scale-110 border border-black"
                      style={{
                        backgroundColor: color,
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                      onClick={() => handleColorChange(color)}
                    />
                  ))}
                </div>
                <Dialog.Close asChild>
                  <Button
                    className="mt-4 flex mx-auto border border-black hover:bg-gray-300"
                    variant="ghost"
                  >
                    Close
                  </Button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        <div className="rounded-lg">
          {activeFormIndex === 1 ? (
            <div className="border border-black rounded-lg">
              <Button
                onClick={() => {
                  setActiveFormIndex(activeFormIndex + 1);
                }}
              >
                Next <ArrowRight />
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <div className="border border-black rounded-lg">
                <Button onClick={() => setActiveFormIndex(activeFormIndex - 1)}>
                  <ArrowLeft /> Back
                </Button>
              </div>
              {activeFormIndex !== 8 ? (
                <div className="border border-black rounded-lg">
                  <Button
                    onClick={() => {
                      setActiveFormIndex(activeFormIndex + 1);
                    }}
                  >
                    Next <ArrowRight />
                  </Button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
      <div className="pt-2">
        {displayComponent(activeFormIndex)}
        <div>
          <p className="text-sm">Step no. : {activeFormIndex}/8</p>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
