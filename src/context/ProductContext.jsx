import React, { createContext, useEffect, useState } from "react";
import { getProductsList } from "../services/requests"

const ProductContext = createContext({
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
    const hourHasPassed = () => Date.now() - lastUpdate > msHour;

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
    }, [lastUpdate]);

    useEffect(() => {
        const intervalId = setInterval(() => setLastUpdate(null), msHour);
        return () => clearInterval(intervalId);
    }, []);

    const productContext = {
        productList,
        setProductList,
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
