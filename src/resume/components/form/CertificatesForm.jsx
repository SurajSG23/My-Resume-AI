import React, { useContext, useState } from "react";
import { Button } from "../../../components/ui/button";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";

const CertificatesForm = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [certificate, setCertificate] = useState({
    title: "",
    authority: "",
    grantedOn: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCertificate({
      ...certificate,
      [name]: value,
    });
  };

  const handleAddCertificate = (e) => {
    e.preventDefault();

    if (currentIndex < 3) {
      setResumeInfo((prev) => {
        const updatedCertificates = [...(prev.certificates || [])];
        updatedCertificates[currentIndex] = { ...certificate };

        return {
          ...prev,
          certificates: updatedCertificates,
        };
      });

      setCertificate({
        title: "",
        authority: "",
        grantedOn: "",
      });

      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("You can only add up to 3 certificates.");
    }
  };

  return (
    <div className="border border-gray-300 shadow-lg h-[70vh] w-[90%] mx-auto rounded-lg p-6 bg-white flex flex-col overflow-y-auto">
      <h2 className="font-bold text-xl text-gray-800 mb-4">Certifications</h2>
      <p className="text-sm text-gray-500 mb-6">Add your certificates</p>
      <hr className="mb-6" />

      <div className="space-y-4 mb-6">
        <form onSubmit={handleAddCertificate}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Certificate Title
            </label>
            <input
              type="text"
              name="title"
              value={certificate.title}
              onChange={handleInputChange}
              placeholder="e.g., Basics Of C Programming"
              className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Issuing Authority
            </label>
            <input
              type="text"
              name="authority"
              value={certificate.authority}
              onChange={handleInputChange}
              placeholder="e.g., UDEMY"
              className="w-full p-3 border rounded-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Granted On
            </label>
            <input
              type="text"
              name="grantedOn"
              value={certificate.grantedOn}
              onChange={handleInputChange}
              placeholder="e.g., March 2023"
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
    </div>
  );
};

export default CertificatesForm;
