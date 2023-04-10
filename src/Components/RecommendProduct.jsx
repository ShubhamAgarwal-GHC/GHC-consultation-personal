import React, { useEffect, useState, useCallback, useContext } from "react";
import { Context } from "./Store";
import { getShopifyProducts } from "../CommanApis/Shopify";
import CONSTANT from "../Constants/constant.json";

// will get it from global state
const category = "hair-1";



const RecommendProduct = () => {
  const [consultDataState, setConsultDataState] = useContext(Context);
  const [shopifyProducts, setShopifyProducts] = useState([]);

  console.log("setConsultDataState",setConsultDataState);

  const getProuctInfo = (product) => {
    let productInfo = {};
    productInfo.title = product.title;
    productInfo.discountedPrice = product["variants"][0]["price"];
    productInfo.actualPrice = product["variants"][0]["compare_at_price"];
    const variant_id_1 = product["variants"][0]["id"];
    const utm_tag =
      consultDataState["consultation_type"] === "30 sec"
        ? "utm_source=website-consultation&utm_medium=short-consultation&utm_campaign=recommended-product"
        : "utm_source=website-consultation&utm_medium=long-consultation&utm_campaign=highly-recommended-product";
    const product_link_temp = `${variant_id_1}:1?checkout[shipping_address][first_name]=${consultDataState["firstName"].trim().replace(/\s/g, "+")}&checkout[shipping_address][phone]=${consultDataState["phone"].trim().replace(/\s/g, "")}&${utm_tag}`;
    productInfo.image = product["images"][0]["src"];;
    productInfo.checkout = "https://ghc.health/cart/" + product_link_temp;

    console.log('consultDataState["phone"]',consultDataState.phone)
    return productInfo;
  };

  const fetchData = useCallback(async () => {
    const products = await getShopifyProducts(category);
    setShopifyProducts(products);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log("shopifyProducts", shopifyProducts);
  return (
    <div>
      {/* <div>RecommendProduct</div> */}
      <div>{CONSTANT.WE_RECOMMEND_ONLY_THE_BEST}</div>


      {shopifyProducts.map((product,index) => {
        const productInfo = getProuctInfo(product);
        return (
          <div key={index}>
            <p>Title--- {productInfo.title}</p>
            <p>Discounted price----- {productInfo.discountedPrice}</p>
            <p>
              Actual price------ {productInfo.actualPrice}
            </p>
            <p>product Image----- {productInfo.image}</p>
            <p>checkout url ----- {productInfo.checkout}</p>
            {/* <img className="image" src={productInfo.image} alt="" /> */}
            <br />
            <br />
            <br />
          </div>
        );
      })}


      
    </div>
  );
};

export default RecommendProduct;
