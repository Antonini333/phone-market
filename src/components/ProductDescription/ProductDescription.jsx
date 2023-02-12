import { capitalizeWords, replaceEmptyString } from "../../utils/functions"

const ProductDescription = ({item, loading}) => {

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
                <ul>
                    {descriptionArray && descriptionArray.map(({ key, value }) => (
                        <li key={key}>
                            {capitalizeWords(key)}: {replaceEmptyString(value)}
                        </li>
                    ))}
                </ul>
                
            )}
        </>
    );
};

export default ProductDescription;