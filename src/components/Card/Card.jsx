import React from "react";
import "../../styles/components/card.scss";
import { hasPrice } from "../../utils/functions";

export const Card = ({ item }) => {

    return (
        <div>
            <div className="c-card">
                <div className="c-card__model">
                    {item.brand} {item?.model}
                </div>
                <div className="c-card__image">
                    <img src={item?.imgUrl} loading="lazy" alt="product" />
                </div>
                <div className="c-card__price">
                    <b> {hasPrice(item)}</b>
                </div>

            </div>
        </div>
    )
}

export default Card