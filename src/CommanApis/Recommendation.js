import axios from "axios";
export const getProductRecommendation = async () => {

    // here it will be two 1 for india and other for usa
    // var BMI = parseInt((weight*0.45*10000) / (height * height))
    return 7776036454648;
}

// this data is the global state object
export const SendWhatsappMessage = async (data) => {
    const config = {
      method: "post",
      url: `https://${process.env.REACT_APP_SEND_MAIL_API_BASE_URL}/api/device/consultation`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then((response) => {
        console.log("success");
      })
      .catch(function (error) {
        console.log(error);
      });
  };