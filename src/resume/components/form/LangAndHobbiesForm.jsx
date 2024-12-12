import React, { useContext, useState } from "react";
import { Button } from "../../../components/ui/button";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";

const LangAndHobbiesForm = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [language, setLanguage] = useState({ language: "", proficiency: "" });
  const [hobby, setHobby] = useState("");

  const handleLanguageChange = (e) => {
    const { name, value } = e.target;
    setLanguage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddLanguage = () => {
    if (!language.language || !language.proficiency) {
      alert("Please fill out both fields for the language.");
      return;
    }
    setResumeInfo((prev) => ({
      ...prev,
      languages: [...(prev.languages || []), language],
    }));
    setLanguage({ language: "", proficiency: "" });
  };

  const handleAddHobby = () => {
    if (!hobby.trim()) {
      alert("Please enter a hobby.");
      return;
    }
    setResumeInfo((prev) => ({
      ...prev,
      hobbies: [...(prev.hobbies || []), { name: hobby }],
    }));
    setHobby("");
  };

  return (
    <div className="border border-gray-300 shadow-lg h-[70vh] w-[90%] mx-auto rounded-lg p-6 bg-white flex flex-col overflow-y-auto">
      <h2 className="font-bold text-xl text-gray-800 mb-4">Languages and Hobbies</h2>
      <p className="text-sm text-gray-500 mb-6">
        Add the languages you know and your hobbies.
      </p>
      <hr className="mb-6" />

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Language Name
          </label>
          <input
            type="text"
            name="language"
            value={language.language}
            onChange={handleLanguageChange}
            placeholder="Enter language name"
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Proficiency Level
          </label>
          <select
            name="proficiency"
            value={language.proficiency}
            onChange={handleLanguageChange}
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          >
            <option value="" disabled hidden>
              Select proficiency level
            </option>
            <option value="Fluent">Fluent</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Beginner">Beginner</option>
          </select>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={handleAddLanguage}
            className="border border-black font-bold py-3 px-8 rounded-lg shadow-md transform hover:scale-105"
          >
            Add Language
          </Button>
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Hobby
        </label>
        <input
          type="text"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
          placeholder="Enter your hobbies"
          className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
        />
      </div>
      <div className="flex justify-center mt-4">
        <Button
          onClick={handleAddHobby}
          className="border border-black font-bold py-3 px-8 rounded-lg shadow-md transform hover:scale-105"
        >
          Add Hobby
        </Button>
      </div>
    </div>
  );
};

export default LangAndHobbiesForm;
