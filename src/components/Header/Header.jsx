import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export const Header = () => {

    const { cartItems } = useContext(ProductContext);

    return (
        <nav>
            <Link to="/">
                <h2>Header</h2>
            </Link>
            cart: {cartItems}
        </nav>
    )
}

