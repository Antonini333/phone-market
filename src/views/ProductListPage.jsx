import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import SearchBar from "../components/SearchBar/SearchBar"
import { v4 } from "uuid";
import { useNavigate } from 'react-router-dom';


const ProductListPage = () => {
    const { productList } = useContext(ProductContext);
    let navigate = useNavigate();


    useEffect(() => {
        console.log(productList);
    }, [productList]);

    return (
        <>
            <h1>List</h1>
            <SearchBar />
            <ul>
                {productList.map((product => {
                    return <li key={v4()} onClick={()=> {navigate(`/products/${product.id}`)} }>
                        {`${product.brand}, ${product.model}`}
                    </li>
                }))}
            </ul>
        </>
    )
}

export default ProductListPage