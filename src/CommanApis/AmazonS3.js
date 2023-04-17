const axios = require('axios');

// const FormData = require('form-data');
// const fs = require('fs');
// let data = new FormData();
// data.append('image', fs.createReadStream('/C:/Users/shubh/Documents/GitHub/GHC-Consultation-V2/src/Images/along_the_hairline.png'));

export const uploadImageToS3 = async (data) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://staging-01.ap-south-1.elasticbeanstalk.com/api/progress/upload',
        headers: { 
          ...data.getHeaders()
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log("data",JSON.stringify(response.data));
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };


