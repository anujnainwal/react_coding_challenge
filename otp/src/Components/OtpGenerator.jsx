import React, { useState } from "react";

const OtpGenerator = ({ length }) => {
  const [otpValues, setOtpValues] = useState(new Array(length).fill(""));
  const inputRefs = Array.from({ length }, () => React.createRef());

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    let newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Move focus to the previous input field if Backspace is pressed
    if (e.key === "Backspace" && index > 0) {
      inputRefs[index - 1].current.focus();
    } else if (index < length - 1 && value !== "") {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <div className="otpSection">
      {otpValues.map((value, index) => {
        return (
          <div className="input_otp" key={index}>
            <input
              type="text"
              maxLength={1}
              value={value}
              autoComplete="otp-value"
              name={`otpValue${index}`}
              ref={inputRefs[index]}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleInputChange(e, index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OtpGenerator;
