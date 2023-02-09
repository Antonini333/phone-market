import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const SearchBar = () => {
    const { productList } = useContext(ProductContext);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const getAutoCompleteResults = () => {
        return productList.map(product => {
            const searchTerm = `${product.brand.toLowerCase()} ${product.model.toLowerCase()}`;
            if (!searchTerm.includes(query.toLowerCase())) return;
            return product;
        }).filter(Boolean);
    }

    useEffect(() => {
        setSuggestions([]);
        if (query.length > 0)
            setSuggestions(getAutoCompleteResults());
    }, [query])

    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
            <div>{suggestions.map(sgt => `${sgt.brand} ${sgt.model}`)}</div>
        </div>
    )

}

export default SearchBar