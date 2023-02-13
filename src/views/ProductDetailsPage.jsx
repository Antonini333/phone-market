import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ProductActions from "../components/ProductActions/ProductActions";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import ProductImage from "../components/ProductImage/ProductImage";
import useProductDetails from "../hooks/useProductDetails";
import "../styles/views/details-page.scss";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [details, loading] = useProductDetails(id);

    return (
        <>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className="l-details-page">
                    <div className="l-details-page__image">
                        <ProductImage item={details} />
                    </div>
                    <div className="l-details-page__footer"></div>
                    <div className="l-details-page__description">
                        <ProductDescription item={details} />
                    </div>
                    <div className="l-details-page__actions">
                        <ProductActions item={details} />
                    </div>
                </div>
            )
            }

        </>
    )
}

export default ProductDetailsPage