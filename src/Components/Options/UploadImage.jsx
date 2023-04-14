import React, { useState } from "react";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the selected image
    console.log("selectedImage",selectedImage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UploadImage;
