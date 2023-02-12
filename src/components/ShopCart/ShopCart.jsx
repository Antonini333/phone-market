import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import "../../styles/components/shopcart.scss";

const ShopCart = () => {
    const { cartItems } = useContext(ProductContext);
    return (
        <div className="c-shopcart">
            <img src="" alt="Cart logo" />
            <span>{cartItems}</span>
        </div>
    )
}

export default ShopCart