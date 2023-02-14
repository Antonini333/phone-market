import React from "react";
import { useEffect, useState, useContext, useCallback } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from 'react-router-dom';
import useDebounceValue from "../../hooks/useDebounceValue";
import shortid from "shortid";
import { HiMagnifyingGlass } from "react-icons/hi2"
import "../../styles/components/searchbar.scss";


const SearchBar = () => {
    let navigate = useNavigate();
    const { productList } = useContext(ProductContext);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const debounceQuery = useDebounceValue(query);

    const getAutoCompleteResults = useCallback(() => {
        return productList.map(product => {
            const searchTerm = `${product.brand.toLowerCase()} ${product.model.toLowerCase()}`;
            if (!searchTerm.includes(debounceQuery.toLowerCase())) return null;
            return product;
        }).filter(Boolean);
    }, [debounceQuery, productList]);

    useEffect(() => {
        setSuggestions([]);
        if (debounceQuery.length > 0)
            setSuggestions(getAutoCompleteResults());
    }, [debounceQuery, getAutoCompleteResults]);



    return (
        <div className="c-searchbar">
            <input type="search"
                className="c-searchbar__input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)} />
            <HiMagnifyingGlass size={24} style={{ position: "absolute", top: "15px", right: "25px" }} />

            {isFocused && <div className="c-searchbar__suggestions" onMouseDown={(e) => e.preventDefault()}>
                {suggestions.map(sgt => <div
                    className="c-searchbar__suggestions-item"
                    key={shortid.generate()}
                    onClick={() => navigate(`/products/${sgt.id}`)}>
                    {`${sgt.brand}-${sgt.model}`}
                </div>
                )}
            </div>}
        </div>
    )

}
export default SearchBar