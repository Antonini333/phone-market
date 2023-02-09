import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { v4 } from "uuid";

const ProductListPage = () => {
    const { productList } = useContext(ProductContext);


    useEffect(() => {
        console.log(productList);
    }, [productList]);

    return (
        <>
        <h1>List</h1>
        <ul>
            {productList.map((product => <li key={v4()}>{`${product.brand}, ${product.model}`}</li>))}
        </ul>
        </>
    )
}

export default ProductListPage