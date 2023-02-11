import { useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import shortid from 'shortid';



const Breadcrumbs = () => {
    const location = useLocation();
    const { productList } = useContext(ProductContext);
    
    const getProductNameById = (crumb) => {
        if(!productList.length) return;
        if (crumb === "products") return "Products";
        const match = productList.find(product => product.id === crumb);
        if(!match) return;
        return `${match.brand} ${match.model}`
    }
    
    let currentLink = "";
    const crumbs = location.pathname.split("/")
        .filter(crumb => !!crumb)
        .map(crumb => {
            currentLink += `/${crumb}`
            return (
                <div key={shortid.generate()}>
                    <Link to={currentLink}>{getProductNameById(crumb)}</Link>
                </div>
            )
        })

    return (
        <div>
            {crumbs}
        </div>
    )
}

export default Breadcrumbs