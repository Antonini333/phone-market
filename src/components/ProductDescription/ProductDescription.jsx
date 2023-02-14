import React from "react";

import PropTypes from "prop-types";
import { capitalizeWords, replaceEmptyString } from "../../utils/functions";
import "../../styles/components/product-description.scss";

const ProductDescription = ({ item }) => {
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

        <div className="c-product-description">
            <div className="c-product-description__header">
                <h3>Description</h3>
            </div>
            <ul className="c-product-description__list">
                {descriptionArray && descriptionArray.map(({ key, value }) => (
                    <li key={key}>
                        {<b>{capitalizeWords(key)}</b>}: {replaceEmptyString(value)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

ProductDescription.defaultProps = {
    item: {},
};

ProductDescription.propTypes = {
    item: PropTypes.object,
};

export default ProductDescription;