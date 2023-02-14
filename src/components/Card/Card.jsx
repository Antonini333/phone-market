import React from "react";
import PropTypes from "prop-types";
import { hasPrice } from "../../utils/functions";
import "../../styles/components/card.scss";

export const Card = ({ item }) => {

    return (
        <div>
            <div className="c-card">
                <div className="c-card__model">
                    {item.brand} {item?.model}
                </div>
                <div className="c-card__image">
                    <img src={item?.imgUrl} loading="lazy" alt="product" draggable={false} />
                </div>
                <div className="c-card__price">
                    <b> {hasPrice(item)}</b>
                </div>

            </div>
        </div>
    )
    
}

Card.defaultProps = {
    item: {},
  };
  
  Card.propTypes = {
    item: PropTypes.object,
  };

export default Card