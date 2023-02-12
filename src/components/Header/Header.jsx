import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "../../styles/components/header.scss"

export const Header = () => {

    const { cartItems } = useContext(ProductContext);

    return (
        <div className="c-header">
            <div className="c-header__content">
                <nav>
                    <Link to="/">
                        <h2>Header</h2>
                    </Link>
                </nav>
                    <Breadcrumbs />
                    cart: {cartItems}
            </div>
        </div>
    )
}

