import React, { createContext, useEffect, useState, useCallback } from "react";
import { getProductsList } from "../services/requests"

export const ProductContext = createContext({
    productList: [],
    cartItems: 0,
    setCartItems: () => {},
});

const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [cartItems, setCartItems] = useState(0);
    const [lastUpdate, setLastUpdate] = useState(null);
    const [loading, setLoading] = useState(false);
    const msHour = 60 * 60 * 1000;
    const hourHasPassed = useCallback(() => Date.now() - lastUpdate > msHour, [lastUpdate, msHour]);

    useEffect(() => {
        setLoading(true);
        if (hourHasPassed()) {
            getProductsList()
                .then(({data}) => {
                    setProductList(data);
                    setLoading(false)
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
