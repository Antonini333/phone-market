import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductDetailsPage = () => {
    const { selectedItem } = useContext(ProductContext);

    console.log("Details", selectedItem)

    return (
        <div>
            <h1>Details</h1>

            <pre>{selectedItem && selectedItem.brand}</pre>
        </div>
    )
}

export default ProductDetailsPage