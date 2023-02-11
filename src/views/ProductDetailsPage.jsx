import { useParams } from "react-router-dom";
import ProductActions from "../components/ProductActions/ProductActions";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import useProductDetails from "../hooks/useProductDetails";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [details, loading] = useProductDetails(id);

    return (
        <div>
            <h1>Details</h1>
            <ProductDescription item={details} loading={loading} />
            <ProductActions item={details} loading={loading}/> 

        </div>
    )
}

export default ProductDetailsPage