import React, { useState, useEffect } from "react";

const Certificates = ({ resumeInfo }) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (resumeInfo.certificates.some((cer) => cer.title.trim() !== "")) {
      setFlag(true);
    }
  }, [resumeInfo.certificates]);

  const returnHeading = () => {
    if (flag) {
      return (
        <>
          <div>
            <h1
              className="font-bold text-center"
              style={{ color: resumeInfo.personalInfo.themeColor }}
            >
              Certificates
            </h1>
          </div>
          <div
            className="h-[1px] border"
            style={{
              borderColor: resumeInfo.personalInfo.themeColor,
              backgroundColor: resumeInfo.personalInfo.themeColor,
            }}
          ></div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="pl-2">
      {returnHeading()}
      {resumeInfo.certificates
        .filter((cer) => cer.title.trim() !== "")
        .map((certificate, index) => (
          <div key={index} className="flex justify-between px-3 pt-2">
            <div>
              <h1
                className="font-bold"
                style={{ color: resumeInfo.personalInfo.themeColor }}
              >
                {certificate.title}
              </h1>
              <p>{certificate.authority}</p>
            </div>
            <div>
              <p>{certificate.grantedOn}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Certificates;
