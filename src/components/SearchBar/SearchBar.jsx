import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import useDebounceValue from "../../hooks/useDebounceValue"
import { useNavigate } from 'react-router-dom';
import {getProductDetails} from "../../services/requests"


const SearchBar = () => {
    let navigate = useNavigate();
    const { productList, setSelectedItem } = useContext(ProductContext);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const debounceQuery = useDebounceValue(query);

    const getAutoCompleteResults = () => {
        return productList.map(product => {
            const searchTerm = `${product.brand.toLowerCase()} ${product.model.toLowerCase()}`;
            if (!searchTerm.includes(debounceQuery.toLowerCase())) return;
            return product;
        }).filter(Boolean);
    }

    const handleClick = (id) => {
        getProductDetails(id)
            .then(({ data }) => setSelectedItem(data))
            .catch(err => console.log(err))
            .finally(navigate(`/products/${id}`));
    }


    useEffect(() => {
        setSuggestions([]);
        if (debounceQuery.length > 0)
            setSuggestions(getAutoCompleteResults());
    }, [debounceQuery])

    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
            <div>{suggestions.map(sgt => <div onClick={() => handleClick(sgt.id)}>{`${sgt.brand}-${sgt.model}`}</div>)}</div>
        </div>
    )

}

export default SearchBar