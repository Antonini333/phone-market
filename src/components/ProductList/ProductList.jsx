import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import SearchBar from "../SearchBar/SearchBar"
import { v4 } from "uuid";
import { useNavigate } from 'react-router-dom';
import { getProductDetails } from "../../services/requests";

const ProductList = () => {
    const { productList, setSelectedItem } = useContext(ProductContext);
    let navigate = useNavigate();

    useEffect(() => {
        setSelectedItem({})
    }, [])

    const handleClick = (id) => {
        getProductDetails(id)
            .then(({ data }) => setSelectedItem(data))
            .catch(err => console.log(err))
            .finally(navigate(`/products/${id}`));
    }

    return (
        <>
            <h1>List</h1>
            <SearchBar />
            <ul>
                {productList.map((product => {
                    return <li key={v4()} onClick={() => handleClick(product.id)}>
                        {`${product.brand}, ${product.model}`}
                    </li>
                }))}
            </ul>
        </>
    )
}

export default ProductList;