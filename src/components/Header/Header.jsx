import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "../../styles/components/header.scss"
import ShopCart from "../ShopCart/ShopCart";
import ShopLogo from "./shop-logo.svg"

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

