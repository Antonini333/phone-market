import { useContext, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar"
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from 'react-router-dom';
import { getProductDetails } from "../../services/requests";
import shortid from 'shortid';

const ProductList = () => {
    const { productList } = useContext(ProductContext);
    let navigate = useNavigate();


    return (
        <>
            <h1>List</h1>
            <SearchBar />
            <ul>
                {productList.map((product => {
                    return <li key={shortid.generate()} onClick={() => navigate(`/products/${product.id}`)}>
                        {`${product.brand}, ${product.model}`}
                    </li>
                }))}
            </ul>
        </>
    )
}

export default ProductList;