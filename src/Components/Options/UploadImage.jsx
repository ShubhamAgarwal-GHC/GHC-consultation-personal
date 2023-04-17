import React, { useState } from "react";
import {uploadImageToS3} from "../../CommanApis/AmazonS3"

const UploadImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
      setSelectedImage(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const formData = new FormData();
      formData.append("image", selectedImage);

      const uploadedData = await uploadImageToS3(formData);
      console.log("uploadedData",uploadedData);

    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Submit</button>
      </form>
    );
}

export default UploadImage;
