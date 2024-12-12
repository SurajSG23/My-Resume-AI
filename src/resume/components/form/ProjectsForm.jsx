import React, { useContext, useState } from "react";
import { Button } from "../../../components/ui/button";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import { AIchatSession } from "../../../service/AiModal";

const ProjectsForm = () => {
  // AI-related state
  const [generatedDesc, setGeneratedDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [keyPoints, setKeyPoints] = useState("");

  const GenerateDescFromAI = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const prompt = `${projects.name}: Using this project name and the key points provided (${keyPoints}), generate 3 clear and concise bullet points describing the project. Start each point with a bullet symbol (•). Add an asterisk (*) as a separator between points, so it can be replaced with a line break later. Ensure the points are formatted on a single line, separated by asterisk symbols.`;
      console.log("Prompt:", prompt);
      const result = await AIchatSession.sendMessage(prompt);
      const aiResponse = result.response.candidates[0].content.parts[0].text;
      console.log("Result:", aiResponse);
      setGeneratedDesc(aiResponse);
      setProjects((prev) => ({ ...prev, description: aiResponse }));
    } catch (error) {
      console.error("Error generating description:", error);
      setGeneratedDesc(
        "An error occurred while generating the description. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [projects, setProjects] = useState({
    name: "",
    link: "",
    description: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjects({
      ...projects,
      [name]: value,
    });
  };

  const handleAddProjects = (e) => {
    e.preventDefault();
  
    if (currentIndex < 3) {
      setResumeInfo((prev) => {
        const updatedProjects = [...(prev.projects || [])];
  
        updatedProjects[currentIndex] = { ...projects };
  
        return {
          ...prev,
          projects: updatedProjects,
        };
      });
  
      setProjects({
        name: "",
        link: "",
        description: "",
      });
  
      setKeyPoints("");
      setGeneratedDesc(""); 
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("You can only add up to 3 projects.");
    }
  };
  

  return (
    <div className="border border-gray-300 shadow-lg h-[70vh] w-[90%] mx-auto rounded-lg p-6 bg-white flex flex-col overflow-y-auto">
      <h2 className="font-bold text-xl text-gray-800 mb-4">Projects</h2>
      <p className="text-sm text-gray-500 mb-6">
        Provide details of your recent projects. You can add multiple entries.
      </p>
      <hr className="mb-6" />

      <div className="space-y-4 mb-6">
        <form action="" onSubmit={handleAddProjects}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Title
            </label>
            <input
              type="text"
              name="name"
              value={projects.name}
              onChange={handleInputChange}
              placeholder="Enter project title"
              required
              className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Link
            </label>
            <input
              type="text"
              name="link"
              onChange={handleInputChange}
              value={projects.link}
              required
              placeholder="Provide the link for your website"
              className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Key Points For Description
            </label>
            <input
              type="text"
              name="keyPoints"
              value={keyPoints}
              onChange={(e) => setKeyPoints(e.target.value)}
              placeholder="Enter key points here..."
              className="w-full py-2 px-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none h-10"
            />
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
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s"
                      alt=""
                      width="30px"
                    />
                    Generate Description
                  </>
                )}
              </Button>
            </div>
          </div>

          <p className="summary text-gray-700">
            {generatedDesc || "No summary generated yet."}
          </p>
          <div className="mt-4">
            <Button
              className=" text-white font-bold py-3 rounded-lg border border-black"
              type="submit"
            >
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectsForm;
