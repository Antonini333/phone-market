import { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar"
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';
import Card from "../Card/Card";
import "../../styles/components/product-list.scss";

const ProductList = () => {
    const { productList } = useContext(ProductContext);
    let navigate = useNavigate();

    return (
        <div className="c-product-list">
            <div className="c-product-list__searchbar">
                <SearchBar />
            </div>
            <div className="c-product-list__grid">
                {productList.map((product => {
                    return <div
                        className="c-product-list__grid-item"
                        key={shortid.generate()}
                        onClick={() => navigate(`/products/${product.id}`)}>
                        <Card item={product} />
                    </div>
                }))}
            </div>
        </div>

    )
}

export default ProductList;