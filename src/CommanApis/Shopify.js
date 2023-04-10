import axios from "axios";
import { getProductRecommendation } from "../CommanApis/Recommendation";

export const getShopifyProducts = async (category) => {
  var config = {
    method: "GET",
    url: `https://${process.env.REACT_APP_GET_PRODUCTS_BASE_URL}/${category}/products.json?limit=250`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios(config)
    .then(async (response) => {
      const recommentedProductId = await getProductRecommendation();
      let products = []

      // This will depend on short and long, how many product need to be recommended, we will have different product ids also
      const product_recommended_1 = response.data["products"].filter(
        (item) => item.id === recommentedProductId
      );
      products.push(product_recommended_1[0]);
      const product_recommended_2 = response.data["products"].filter(
        (item) => item.id === recommentedProductId
      );
      products.push(product_recommended_2[0]);
      return products;
    })
    .catch((error) => {
      console.log("error-debug", error);
      return [];
    });
};
