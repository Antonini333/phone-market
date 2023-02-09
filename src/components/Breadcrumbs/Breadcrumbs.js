import { useLocation } from "react-router"
import { Link } from "react-router-dom";
import { v4 } from "uuid";



const Breadcrumbs = () => {
    const location = useLocation();
    let currentLink = "";

    const crumbs = location.pathname.split("/")
        .filter(crumb => !!crumb)
        .map(crumb => {
            currentLink += `/${crumb}`
            return (
                <div key={v4()}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })

        console.log({crumbs})
    return (
        <div>
            {crumbs}
        </div>
    )
}

export default Breadcrumbs