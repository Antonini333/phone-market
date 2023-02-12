import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import { addToCart } from "../../services/requests";
import "../../styles/components/product-actions.scss";

const COLOR_KEY = "color";
const STORAGE_KEY = "storage";


const ProductActions = ({ item, loading }) => {
    let navigate = useNavigate();
    const { setCartItems } = useContext(ProductContext);
    const [optionSelected, setOptionSelected] = useState({});
    let colors = item?.options?.colors;
    let storages = item?.options?.storages;

    useEffect(() => {
        item && setOptionSelected({
            id: item?.id,
            colorCode: colors[0]?.code,
            storageCode: storages[0]?.code
        })
    }, [item, colors, storages]);

    const handleBuy = () => {
        addToCart(optionSelected)
            .then((res) => setCartItems((prev) => prev + res.data.count))
            .catch((err) => console.log(err))
            .finally(navigate("/"))
    }

    const handleSelection = (key, value) => {
        if (key === COLOR_KEY) setOptionSelected((prev) => { return { ...prev, colorCode: value } });
        if (key === STORAGE_KEY) setOptionSelected((prev) => { return { ...prev, storageCode: value } });
    }

    const handleActive = (code) => {
        if (code === optionSelected.colorCode || code === optionSelected.storageCode) return "c-product-actions__item--selected";
        return "c-product-actions__item"
    }

    return (
        <>
            { loading ? (
                <div>Loading</div>
            ) : (
                <div className="c-product-actions">
                    <h3>Options</h3>
                    <div>
                        <h4>Colors</h4>
                        <div className="c-product-actions__colors">
                            {colors?.map((color => {
                                return <div className={`${handleActive(color.code)}`} key={color.code} onClick={() => handleSelection(COLOR_KEY, color.code)} >{color.name}</div>
                            }))}
                        </div>
                    </div>
                    <div>
                        <h4>Storage</h4>
                        <div className="c-product-actions__storage">
                            {storages?.map((storage => {
                                return <div className={`${handleActive(storage.code)}`} key={storage.code} onClick={() => handleSelection(STORAGE_KEY, storage.code)}>{storage.name}</div>
                            }))}
                        </div>
                    </div>
                    <div className="c-product-actions__button">
                        <button onClick={handleBuy}>Add to cart</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductActions