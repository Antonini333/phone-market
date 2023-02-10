import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import { addToCart } from "../../services/requests";

const COLOR_KEY = "color";
const STORAGE_KEY = "storage";


const ProductActions = () => {
    let navigate = useNavigate();
    const { selectedItem, setCartItems } = useContext(ProductContext);
    const optionSelected = {
        id: selectedItem.id,
        colorCode: null,
        storageCode: null
    };
    const colors = selectedItem?.options?.colors;
    const storages = selectedItem?.options?.storages;


    const handleBuy = () => {
        if (optionSelected.colorCode && optionSelected.storageCode) {
            addToCart(optionSelected)
                .then((res) => setCartItems((prev) => prev + res.data.count))
                .catch((err) => console.log(err))
                .finally(navigate("/"))
        }
    }

    const handleSelection = (key, value) => {
        if (key === COLOR_KEY) optionSelected.colorCode = value;
        if (key === STORAGE_KEY) optionSelected.storageCode = value;
    }

    return (
        <>
            <div>
                <h4>Colors</h4>
                {colors?.map((color => {
                    return <div key={color.code} onClick={() => handleSelection(COLOR_KEY, color.code)} >{color.name}</div>
                }))}
            </div>

            <div>
                <h4>Storage</h4>
                {storages?.map((storage => {
                    return <div key={storage.code} onClick={() => handleSelection(STORAGE_KEY, storage.code)}>{storage.name}</div>
                }))}
            </div>
            <div>
                <button onClick={handleBuy}>Add to cart</button>
            </div>
        </>
    )
}

export default ProductActions