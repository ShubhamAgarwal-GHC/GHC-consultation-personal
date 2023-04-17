import React, { useState } from "react";
import { uploadImageToS3 } from "../../CommanApis/AmazonS3";
import ProgressBar from "../ProgressBar";
import CONSTANT from "../../Constants/constant.json";
import TakeSelfie from "../../Images/TakeSelfie.png";
import "../../Css/UploadImage.css";
const UploadImage = ({
  question,
  OPTIONS,
  multipleSelectAllowed,
  isProgressBarRequired,
  percentage,
  handleNextPage,
}) => {
  const [selectedImage, setSelectedImage] = useState();

  const style = {
    backgroundColor: selectedImage ? "#333333" : "grey",
    color: "white",
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    let optionVal = [];
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      const uploadedData = await uploadImageToS3(formData);
      console.log("uploadedData", uploadedData);
      optionVal.push(uploadedData.data);
    } else {
      optionVal.push("Skip");
    }

    handleNextPage(optionVal);
  };

  return (
    <div className="uploadImage">
      {isProgressBarRequired && (
        <div className="progressBar">
          <ProgressBar percentage={percentage} />
        </div>
      )}
      <div className="uploadImage-question">
        {question}{" "}
        {multipleSelectAllowed && (
          <div className="selectedAllthatApply">
            <h4>{CONSTANT.SelectAllThatApply}</h4>
          </div>
        )}
      </div>

      <div className="formData">
        <input className="inputFile" type="file" onChange={handleImageChange} />
        <div className="buttons">
          {OPTIONS.map((option, key) => {
            return (
              <button
                key={key}
                className="formData-btn"
                style={key === 0 ? style : {}}
                onClick={() => handleSubmit()}
                disabled={key === 1 ? false : key === 0 && selectedImage ? false : true}
              >
                {option.displayText}
              </button>
            );
          })}
        </div>
      </div>

      <div className="uploadImage-banner">
        <div className="data">
          <p className="heading">Hair Photo:</p>
          <ul className="lisItems">
            {CONSTANT.UploadHairPic.map((item, key) => {
              return <li key={key}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="image"></div>
        <img src={TakeSelfie} alt="" />
      </div>
    </div>
  );
};

export default UploadImage;
