import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "../../styles/components/header.scss"
import ShopCart from "../ShopCart/ShopCart";

export const Header = () => {

    return (
        <div className="c-header">
            <div className="c-header__content">
                <nav>
                    <Link to="/">
                        <h2>Header</h2>
                    </Link>
                </nav>
                <Breadcrumbs />
                <ShopCart />
            </div>
        </div>
    )
}

