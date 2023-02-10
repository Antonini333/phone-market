import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import { capitalizeWords, replaceEmptyString } from "../../utils/functions"

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
        .map(([key, value]) => {
            if (Array.isArray(value))
                value = value.join(", ");
            return ({ key, value })
        });

    return (
        <>
            {descriptionArray.length ? (
                <ul>
                    {descriptionArray.map(({ key, value }) => (
                        <li key={key}>
                            {capitalizeWords(key)}: {replaceEmptyString(value)}
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