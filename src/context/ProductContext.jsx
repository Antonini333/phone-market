import React, { createContext, useEffect, useState, useCallback } from "react";
import { getProductsList } from "../services/requests"

export const ProductContext = createContext({
    productList: [],
    setProductList: () => {},
    cartItems: 0,
    setCartItems: () => {},
});

const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [cartItems, setCartItems] = useState(0);
    const [lastUpdate, setLastUpdate] = useState(null);
    const msHour = 60 * 60 * 1000;
    const hourHasPassed = useCallback(() => Date.now() - lastUpdate > msHour, [lastUpdate, msHour]);

    useEffect(() => {
        if (hourHasPassed()) {
            getProductsList()
                .then(({data}) => {
                    setProductList(data);
                    console.log("New update", Date.now())
                    setLastUpdate(Date.now())
                })
                .catch(err => console.error(err))
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

export default ProductProvider;
