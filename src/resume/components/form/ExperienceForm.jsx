import React, { useState, useContext } from "react";
import { Button } from "../../../components/ui/button";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import { AIchatSession } from "../../../service/AiModal";

const ExperienceForm = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    start: "",
    end: "",
    description: "",
  });
  const [keyPoints, setKeyPoints] = useState("");
  const [generatedDesc, setGeneratedDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value,
    });
  };

  const GenerateDescFromAI = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const prompt = `${experience.position} at ${experience.company}: Using this position title, company name, and the key points provided (${keyPoints}), generate 3 clear and concise bullet points describing the job. Start each point with a bullet symbol (•). Add an asterisk (*) as a separator between points, so it can be replaced with a line break later. Ensure the points are formatted on a single line, separated by asterisk symbols. If the key points are not given, generate based on the position.`;
      console.log("Prompt:", prompt);
      const result = await AIchatSession.sendMessage(prompt);
      const aiResponse = result.response.candidates[0].content.parts[0].text;
      console.log("Result:", aiResponse);
      setGeneratedDesc(aiResponse);

      setExperience((prev) => ({ ...prev, description: aiResponse }));

      setResumeInfo((prev) => {
        const updatedExperiences = prev.experience.map((exp, index) =>
          index === currentIndex ? { ...exp, description: aiResponse } : exp
        );
        return {
          ...prev,
          experience: updatedExperiences,
        };
      });
    } catch (error) {
      console.error("Error generating description:", error);
      setGeneratedDesc("An error occurred while generating the description. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddExperience = (e) => {
    e.preventDefault();

    if (currentIndex < 3) {
      setResumeInfo((prev) => {
        const updatedExperiences = [...(prev.experience || [])];
        updatedExperiences[currentIndex] = { ...experience };

        return {
          ...prev,
          experience: updatedExperiences,
        };
      });

      setExperience({
        company: "",
        position: "",
        start: "",
        end: "",
        description: "",
      });

      setKeyPoints("");
      setGeneratedDesc("");
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("You can only add up to 3 experiences.");
    }
  };

  return (
    <div className="border border-gray-300 shadow-lg h-[70vh] w-[90%] mx-auto rounded-lg p-6 bg-white flex flex-col overflow-y-auto">
      <h2 className="font-bold text-xl text-gray-800 mb-4">Professional Experience</h2>
      <p className="text-sm text-gray-500 mb-6">Provide details of your professional experience. You can add up to 3 entries.</p>
      <hr className="mb-6" />

      <form className="space-y-4 mb-6" onSubmit={handleAddExperience}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input
            name="company"
            type="text"
            value={experience.company}
            placeholder="Enter company name"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
          <input
            name="position"
            type="text"
            value={experience.position}
            placeholder="Enter your position"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
          <input
            name="start"
            type="text"
            value={experience.start}
            placeholder="e.g., 2022"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
          <input
            name="end"
            type="text"
            value={experience.end}
            placeholder="e.g., Present"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Key Points For your Job Description</label>
          <input
            type="text"
            className="w-full py-2 px-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none h-10"
            placeholder="Enter key points here..."
            value={keyPoints}
            onChange={(e) => setKeyPoints(e.target.value)}
          />
        </div>

        <div className="flex justify-center mt-3">
          <Button
            className="bg-white border border-black text-black text-md py-1 px-1 rounded-lg shadow-md transition-transform transform hover:scale-105"
            onClick={GenerateDescFromAI}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="loader spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full"></span>
                Loading...
              </span>
            ) : (
              <>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s" alt="" width="30px" />
                Generate Description
              </>
            )}
          </Button>
        </div>

        <p className="summary text-gray-700">{generatedDesc || "No summary generated yet."}</p>

        <div className="mt-4">
          <Button type="submit" className="text-white bg-black font-bold py-3 rounded-lg border border-black">
            Add Experience
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
