import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";

const ProductActions = () => {
    const { selectedItem } = useContext(ProductContext);

    console.log(selectedItem);

    return (
        <>
        </>
    )
}

export default ProductActions