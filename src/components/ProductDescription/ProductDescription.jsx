import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";

const ProductDescription = () => {
    const { selectedItem } = useContext(ProductContext);
    const keysToMap = [
        "brand",
        "model",
        "price",
        "cpu",
        "ram",
        "os",
        "displayResolution",
        "battery",
        "primaryCamera",
        "secondaryCamera",
        "dimentions",
        "weight"
    ];

    const descriptionArray = Object.entries(selectedItem)
        .filter(([key, value]) => keysToMap.includes(key))
        .map(([key, value]) => ({ key, value }));

    return (
        <>
            {descriptionArray.length ? (
                <ul>
                    {descriptionArray.map(({ key, value }) => (
                        <li key={key}>
                            {key}: {value}
                        </li>
                    ))}
                </ul>
            ) : (
                <div>LOADING</div>
            )}
        </>
    );
};

export default ProductDescription;