import { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar"
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';
import Card from "../Card/Card";

const ProductList = () => {
    const { productList } = useContext(ProductContext);
    let navigate = useNavigate();


    return (
        <>
            <h1>List</h1>
            <SearchBar />
            <div>
                {productList.map((product => {
                    return <div key={shortid.generate()} onClick={() => navigate(`/products/${product.id}`)}>
                        {`${product.brand}, ${product.model}`}
                        <Card item={product}/>
                    </div>
                }))}
            </div>
        </>
    )
}

export default ProductList;