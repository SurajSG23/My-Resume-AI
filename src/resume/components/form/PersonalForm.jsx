import React, { useContext } from "react";
import { Button } from "../../../components/ui/button";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";

const PersonalForm = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));
  };

  const onSave = (e) => {
    e.preventDefault();
    console.log("Personal details saved:", resumeInfo.personalInfo);
  };

  return (
    <div className="border border-gray-300 shadow-lg h-[70vh] w-[90%] mx-auto rounded-lg p-6 bg-white overflow-y-auto">
      <h2 className="font-bold text-xl text-gray-800">Personal Details</h2>
      <p className="text-sm text-gray-500 mb-4">
        Please provide all the required details to proceed.
      </p>
      <hr className="mb-6 border-gray-300" />
      <form className="flex flex-col gap-5" onSubmit={onSave}>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="bg-gray-50 px-4 py-3 outline-none w-full text-gray-800 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            placeholder="Enter your Name"
            type="text"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            className="bg-gray-50 px-4 py-3 outline-none w-full text-gray-800 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            placeholder="Email"
            type="email"
            // value={resumeInfo.personalInfo.email || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            className="bg-gray-50 px-4 py-3 outline-none w-full text-gray-800 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            placeholder="Phone Number"
            type="tel"
            // value={resumeInfo.personalInfo.phone || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600" htmlFor="linkedin">
            LinkedIn Profile
          </label>
          <input
            id="linkedin"
            name="linkedin"
            className="bg-gray-50 px-4 py-3 outline-none w-full text-gray-800 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            placeholder="LinkedIn link"
            type="url"
            // value={resumeInfo.personalInfo.linkedin || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600" htmlFor="github">
            GitHub Profile
          </label>
          <input
            id="github"
            name="github"
            className="bg-gray-50 px-4 py-3 outline-none w-full text-gray-800 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            placeholder="GitHub link"
            type="url"
            // value={resumeInfo.personalInfo.github || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600" htmlFor="portfolio">
            Portfolio
          </label>
          <input
            id="portfolio"
            name="portfolio"
            className="bg-gray-50 px-4 py-3 outline-none w-full text-gray-800 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            placeholder="Portfolio link"
            type="url"
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
