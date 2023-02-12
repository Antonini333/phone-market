import { useEffect, useState, useContext, useCallback } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from 'react-router-dom';
import useDebounceValue from "../../hooks/useDebounceValue";
import shortid from "shortid";
import "../../styles/components/searchbar.scss";


const SearchBar = () => {
    let navigate = useNavigate();
    const { productList } = useContext(ProductContext);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
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
    }, [debounceQuery, getAutoCompleteResults])

    return (
        <div className="c-searchbar">
            <input className="c-searchbar__input" value={query} onChange={(e) => setQuery(e.target.value)}></input>
            <div className="c-searchbar__suggestions">{suggestions.map(sgt => <div className="c-searchbar__suggestions-item" key={shortid.generate()} onClick={() => navigate(`/products/${sgt.id}`)}>{`${sgt.brand}-${sgt.model}`}</div>)}</div>
        </div>
    )

}

export default SearchBar