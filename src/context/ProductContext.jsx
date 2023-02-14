import React, { createContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { getProductsList } from "../services/requests";
import PropTypes from "prop-types";

export const ProductContext = createContext({
    productList: [],
    cartItems: 0,
    setCartItems: () => {},
});

const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [cartItems, setCartItems] = useState(0);
    const [lastUpdate, setLastUpdate] = useState(null);
    const navigate = useNavigate();
    const msHour = 60 * 60 * 1000;
    const hourHasPassed = useCallback(() => Date.now() - lastUpdate > msHour, [lastUpdate, msHour]);

    useEffect(() => {
        if (hourHasPassed()) {
            getProductsList()
                .then(({data}) => {
                    setProductList(data);
                    setLastUpdate(Date.now());
                })
                .catch((err) => {
                    console.error(err);
                    navigate("/products/error")
                })
        }
    }, [lastUpdate, msHour, hourHasPassed]);

    useEffect(() => {
        const intervalId = setInterval(() => setLastUpdate(null), msHour);
        return () => clearInterval(intervalId);
    }, [msHour]);


    const productContext = {
        productList,
        cartItems,
        setCartItems
    };

    return (
        <ProductContext.Provider value={productContext}>
            {children}
        </ProductContext.Provider>
    )
}



ProductProvider.defaultProps = {
    children: React.Children,
  };
  
  ProductProvider.propTypes = {
    children: PropTypes.element,
  };


export default ProductProvider;
