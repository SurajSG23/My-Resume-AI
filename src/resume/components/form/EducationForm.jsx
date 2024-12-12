import React, { useContext, useState } from "react";
import { Button } from "../../../components/ui/button";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";

const EducationForm = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    start: "",
    end: "",
    city: "",
    grade:"",
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value,
    });
  };
  
  const handleAddEducation = (e) => {
    e.preventDefault();

    if (currentIndex < 3) {
      setResumeInfo((prev) => {
        const updatedEducation = [...(prev.education || [])];
        updatedEducation[currentIndex] = { ...education };

        return {
          ...prev,
          education: updatedEducation,
        };
      });

      setEducation({
        school: "",
        degree: "",
        start: "",
        end: "",
        city: "",
        grade:"",
      });

      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("You can only add up to 3 education.");
    }
  };
  return (
    <div className="border border-gray-300 shadow-lg h-[70vh] w-[90%] mx-auto rounded-lg p-6 bg-white flex flex-col overflow-y-auto">
      <h2 className="font-bold text-xl text-gray-800 mb-4">Education</h2>
      <p className="text-sm text-gray-500 mb-6">
        Provide details of your education. You can add multiple entries.
      </p>
      <hr className="mb-6" />

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            School/University Name
          </label>
          <input
            type="text"
            name="school"
            value={education.school}
            placeholder="Enter university name"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course
          </label>
          <input
            type="text"
            name="degree"
            value={education.degree}
            placeholder="Enter your course"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
          </label>
          <input
            type="text"
            name="start"
            value={education.start}
            placeholder="e.g., 2022"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <input
            type="text"
            name="end"
            value={education.end}
            placeholder="e.g., Present"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            name="city"
            value={education.city}
            placeholder="e.g., Mysuru"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Grade/Score
          </label>
          <input
            type="number"
            name="grade"
            value={education.grade}
            placeholder="e.g.,90% "
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="mt-4">
          <Button className=" text-white font-bold py-3 rounded-lg border border-black" onClick={handleAddEducation}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
