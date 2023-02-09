import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import useDebounceValue from "../../hooks/useDebounceValue"

const SearchBar = () => {
    const { productList } = useContext(ProductContext);
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

    useEffect(() => {
        setSuggestions([]);
        if (debounceQuery.length > 0)
            setSuggestions(getAutoCompleteResults());
    }, [debounceQuery])

    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
            <div>{suggestions.map(sgt => `${sgt.brand} ${sgt.model}`)}</div>
        </div>
    )

}

export default SearchBar