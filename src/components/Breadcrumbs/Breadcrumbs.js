import { useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { v4 } from "uuid";



const Breadcrumbs = () => {
    const location = useLocation();
    const { productList } = useContext(ProductContext);
    
    const getProductNameById = (crumb) => {
        if (crumb === "products") return "Products";
        const match = productList.find(product => product.id === crumb);
        return `${match.brand} ${match.model}`
    }
    
    let currentLink = "";
    const crumbs = location.pathname.split("/")
        .filter(crumb => !!crumb)
        .map(crumb => {
            currentLink += `/${crumb}`
            return (
                <div key={v4()}>
                    <Link to={currentLink}>{getProductNameById(crumb)}</Link>
                </div>
            )
        })

    console.log({ crumbs })
    return (
        <div>
            {crumbs}
        </div>
    )
}

export default Breadcrumbs