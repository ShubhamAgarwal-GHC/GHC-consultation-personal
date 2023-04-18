import React, {useState, useEffect} from "react";

const initialState = {
    firstName: "",
    lastName: "",
    phone : "",
    consultation_type: "",
    category: "",
    booking: "", //["Free consultation" : "Free recommendation"]
    type: process.env.REACT_APP_BRAND,
    productLink: [], // req (from shopify)
    productName: [], // req (from shopify)
    user_survey: [], // req (array of question answer- [{question: key, answer: problems},{question: key, answer: problems}])
    consultation_completion_status: "", //["started","completed"]
}

export const Context = React.createContext();

const Store = ({children}) => {
    const [consultDataState, setConsultDataState] = useState(
        JSON.parse(sessionStorage.getItem("consultDataState")) || initialState
      );

      useEffect(() => {
        sessionStorage.setItem("consultDataState", JSON.stringify(consultDataState));
      }, [consultDataState]);
    return (
        <Context.Provider value={[consultDataState, setConsultDataState]}>
            {children}
        </Context.Provider>
    )
} 

export default Store