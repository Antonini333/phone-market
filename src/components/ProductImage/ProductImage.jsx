import "../../styles/components/product-image.scss";

const ProductImage = ({ item }) => {

    return (
        <div className="c-product-image">
            <img src={item?.imgUrl} alt="Product" />
        </div>
    )

}

export default ProductImage