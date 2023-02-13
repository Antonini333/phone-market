import "../../styles/components/product-image.scss";
import {IoMdArrowRoundBack} from "react-icons/io"
import { useNavigate } from "react-router";

const ProductImage = ({ item }) => {
const navigate = useNavigate();

    return (
        <div className="c-product-image">
            <button className="c-product-image__back" onClick={() => navigate("/")}>
                <IoMdArrowRoundBack size={32} color={"white"}/>
            </button>
            <img src={item?.imgUrl} alt="Product" />
        </div>
    )

}

export default ProductImage