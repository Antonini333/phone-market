import React, { createContext, useState } from "react";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [cartItems, setCartItems] = useState(0);
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
