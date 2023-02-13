import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ShopCart from "../ShopCart/ShopCart";
import ShopLogo from "./shop-logo.svg"
import "../../styles/components/header.scss"

export const Header = () => {

    return (
        <div className="c-header">
            <div className="c-header__content">
                <nav>
                    <Link to="/">
                        <img src={ShopLogo} alt="logo"/>
                    </Link>
                </nav>
                <Breadcrumbs />
                <ShopCart />
            </div>
        </div>
    )
}

