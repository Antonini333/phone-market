import { useContext } from "react";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import { ProductContext } from "../context/ProductContext";


const ProductDetailsPage = () => {
    const { selectedItem } = useContext(ProductContext);

    return (
        <div>
            <h1>Details</h1>
            <ProductDescription />

        </div>
    )
}

export default ProductDetailsPage