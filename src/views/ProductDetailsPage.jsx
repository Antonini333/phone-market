import { useContext } from "react";
import ProductActions from "../components/ProductActions/ProductActions";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import { ProductContext } from "../context/ProductContext";


const ProductDetailsPage = () => {
    const { selectedItem } = useContext(ProductContext);

    return (
        <div>
            <h1>Details</h1>
            <ProductDescription />
            <ProductActions />

        </div>
    )
}

export default ProductDetailsPage