import React, { useContext, useState } from "react";
import { Button } from "../../../components/ui/button";
import { AIchatSession } from "../../../service/AiModal";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";

const SummaryForm = () => {
  const [generatedSummary, setGeneratedSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [keyPoints, setKeyPoints] = useState("");
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const GenerateSummaryFromAI = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const prompt = `${keyPoints}, depending on this key points generate a 3 line summary for my resume. Don't give me anything else, just give me the paragraph.`;
      console.log("Prompt:", prompt);
      const result = await AIchatSession.sendMessage(prompt);
      console.log(
        "Result:",
        result.response.candidates[0].content.parts[0].text
      );
      setGeneratedSummary(result.response.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error generating summary:", error);
      setGeneratedSummary(
        "An error occurred while generating the summary. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };
  const handleAddSummary = (e) => {
    e.preventDefault();

    setResumeInfo((prev) => ({
      ...prev,
      summaries:
        prev.summaries.length > 0
          ? [{ summary: generatedSummary }, ...prev.summaries.slice(1)]
          : [{ summary: generatedSummary }],
    }));
  };

  return (
    <div className="border border-gray-300 shadow-lg h-[70vh] w-[90%] mx-auto rounded-lg p-6 bg-white flex flex-col">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Summary</h2>
        <p className="text-sm text-gray-500 mb-6">
          Let AI generate a summary of your resume.
        </p>
      </div>
      <form action="" onSubmit={GenerateSummaryFromAI}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Key Points For your Summary
          </label>
          <input
            type="text"
            className="w-full  py-2 px-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none h-10"
            required
            placeholder="Enter key points here..."
            onChange={(e) => setKeyPoints(e.target.value)}
          ></input>
        </div>
        <div className="flex justify-center mt-3">
          <Button
            className={`bg-white border border-black text-black text-md py-1 px-1 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={isLoading}
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
                Generate Summary
              </>
            )}
          </Button>
        </div>
      </form>
      <div className="flex-grow mt-4 overflow-y-auto">
        <h3 className="font-semibold text-lg text-gray-800">
          Generated Summary:
        </h3>
        <p className="summary text-gray-700">
          {generatedSummary || "No summary generated yet."}
        </p>
      </div>
      <div className="mt-4">
        <Button
          className="text-white font-bold py-3 rounded-lg border border-black"
          onClick={handleAddSummary}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default SummaryForm;
