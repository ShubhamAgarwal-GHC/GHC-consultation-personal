import React, {useState} from "react";

const initialState = {
    firstName: "",
    lastName: "",
    phone : "",
    consultation_type: "",
    category: "",
    booking: "",
    type: process.env.REACT_APP_BRAND,
    productLink: "", // req (from shopify)
    productName: "", // req (from shopify)
    user_survey: [], // req (array of question answer- [{question: key, answer: problems},{question: key, answer: problems}])
}

export const Context = React.createContext();

const Store = ({children}) => {
    const [consultDataState, setConsultDataState] = useState(initialState);
    return (
        <Context.Provider value={[consultDataState, setConsultDataState]}>
            {children}
        </Context.Provider>
    )
} 

export default Store