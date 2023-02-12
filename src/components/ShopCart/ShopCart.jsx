import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { FiShoppingCart } from "react-icons/fi";
import "../../styles/components/shopcart.scss";

const ShopCart = () => {
    const { cartItems } = useContext(ProductContext);
    return (
        <div className="c-shopcart">
            <div className="c-shopcart__icon">
                <FiShoppingCart size={24} />
                <span id="badge">{cartItems}</span>
            </div>
        </div>
    )
}

export default ShopCart