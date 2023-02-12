import { capitalizeWords, replaceEmptyString } from "../../utils/functions";
import "../../styles/components/product-description.scss";

const ProductDescription = ({ item, loading }) => {
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
        "secondaryCmera",
        "dimentions",
        "weight"
    ];

    const descriptionArray = item && Object.entries(item)
        .filter(([key]) => keysToMap.includes(key))
        .map(([key, value]) => {
            if (Array.isArray(value))
                value = value.join(", ");
            return ({ key, value })
        });

    return (
        <>
            {loading ? (
                <div>loading</div>
            ) : (
                <div className="c-product-description">
                    <h3>Description</h3>
                    <ul className="c-product-description__list">
                        {descriptionArray && descriptionArray.map(({ key, value }) => (
                            <li key={key}>
                                {capitalizeWords(key)}: {replaceEmptyString(value)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default ProductDescription;