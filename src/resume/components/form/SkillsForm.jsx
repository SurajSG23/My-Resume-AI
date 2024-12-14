import React, { useContext, useState } from "react";
import { Button } from "../../../components/ui/button";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";

const SkillsForm = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [skill, setSkill] = useState({
    skill: "",
    score: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSkill({
      ...skill,
      [name]: value,
    });
  };

  const handleAddSkill = (e) => {
    e.preventDefault();

    setResumeInfo((prev) => ({
      ...prev,
      skills: [...(prev.skills || []), { ...skill }],
    }));

    setSkill({
      skill: "",
      score: "",
    });
  };

  return (
    <div className="border border-gray-300 shadow-lg h-[70vh] w-[90%] mx-auto rounded-lg p-6 bg-white flex flex-col overflow-y-auto">
      <h2 className="font-bold text-xl text-gray-800 mb-4">Skills</h2>
      <p className="text-sm text-gray-500 mb-6">
        Add all of your skills and rate your proficiency.
      </p>
      <hr className="mb-6" />

      <form onSubmit={handleAddSkill} className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Skill Name
          </label>
          <input
            type="text"
            name="skill"
            value={skill.skill}
            onChange={handleInputChange}
            placeholder="Enter skill name"
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Proficiency (30-100)
          </label>
          <input
            type="number"
            name="score"
            value={skill.score}
            onChange={handleInputChange}
            min="30"
            max="100"
            placeholder="Enter proficiency (e.g., 80)"
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            required
          />
        </div>
        <div className="flex justify-center mt-6">
          <Button
            className="border border-black font-bold py-3 px-8 rounded-lg shadow-md transform hover:scale-105"
            type="submit"
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SkillsForm;
