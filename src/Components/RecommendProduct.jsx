import React, { useEffect, useState, useCallback, useContext } from "react";
import { Context } from "./Store";
import { getShopifyProducts } from "../CommanApis/Shopify";
import { QUESTIONS_WITH_OPTIONS } from "../Constants/Consultation";
import "../Css/RecommendProduct.css"

// need to check for the naming convension from lava
const category = "hair-1";

const RecommendProduct = () => {
  const [consultDataState, setConsultDataState] = useContext(Context);
  const [shopifyProducts, setShopifyProducts] = useState([]);

  const handleBuyNow = (newPageUrl) => {
    window.open(newPageUrl, "_blank") //to open new page
  }

  console.log("setConsultDataState", setConsultDataState);

  // need to talk to lava/ analyse code and update this function (imp)
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
    const product_link_temp = `${variant_id_1}:1?checkout[shipping_address][first_name]=${consultDataState[
      "firstName"
    ]
      .trim()
      .replace(
        /\s/g,
        "+"
      )}&checkout[shipping_address][phone]=${consultDataState["phone"]
      .trim()
      .replace(/\s/g, "")}&${utm_tag}`;
    productInfo.image = product["images"][0]["src"];
    productInfo.checkout = "https://ghc.health/cart/" + product_link_temp;

    console.log('consultDataState["phone"]', consultDataState.phone);
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
  const brand = consultDataState["type"].toUpperCase();

  //need to delete first and un-comment second
  const productCategory = "PERFORMANCE";
  // const productCategory = consultDataState["category"]

  //need to delete first and un-comment second
  const consultation_type = "SHORT";
  // const consultation_type = consultDataState["consultation_type"].toUpperCase();

  const tagLines =
    QUESTIONS_WITH_OPTIONS[brand][consultation_type][productCategory][
      "recommandTagLine"
    ];

    console.log("tagLines",tagLines);
  return (
    <div className="recommend">
      <div className="tagline">
        <h1 className="tagline">{tagLines}</h1>        
      </div>
      <div className="products">
        {shopifyProducts.map((product) => {
          const productInfo = getProuctInfo(product);
          return (
            <div className="product">
              <img src={productInfo.image} alt="" />
              <p className="title">{productInfo.title}</p>
              <div className="price">
                <p className="discounted">Rs. {productInfo.discountedPrice}</p>
                <p className="actual">Rs. {productInfo.actualPrice}</p>
              </div>
              <button onClick={() => handleBuyNow(productInfo.checkout)}>Buy Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendProduct;
