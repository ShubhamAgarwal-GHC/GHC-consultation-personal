import axios from "axios";
export const uploadImageToS3 = async (data) => {
  try {
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://staging-01.ap-south-1.elasticbeanstalk.com/api/progress/upload',
      data: data
    };
  
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("Error while uploading image to S3",error);
    return null;
  }
};

