import { useParams } from "react-router-dom";
import ProductActions from "../components/ProductActions/ProductActions";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import ProductImage from "../components/ProductImage/ProductImage";
import useProductDetails from "../hooks/useProductDetails";
import "../styles/views/details-page.scss";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [details, loading] = useProductDetails(id);

    return (
        <div className="l-details-page">
            <div className="l-details-page__image">
                <ProductImage item={details} loading={loading}/>
            </div>
            <div className="l-details-page__footer"></div>
            <div className="l-details-page__description">
                <ProductDescription item={details} loading={loading} />
            </div>
            <div className="l-details-page__actions">
                <ProductActions item={details} loading={loading} />
            </div>
        </div>
    )
}

export default ProductDetailsPage