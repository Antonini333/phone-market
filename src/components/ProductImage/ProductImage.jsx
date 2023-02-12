import "../../styles/components/product-image.scss";

const ProductImage = ({ item, loading }) => {

    return (
        <>
            {loading ? (
                <div>loading</div>
            ) :
                (
                    <div className="c-product-image">
                        <img src={item?.imgUrl} alt="Product image" />
                    </div>
                )
            }

        </>
    )

}

export default ProductImage