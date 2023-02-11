import { useEffect, useState, useContext, useCallback } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from 'react-router-dom';
import useDebounceValue from "../../hooks/useDebounceValue";
import shortid from "shortid";


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
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
            <div>{suggestions.map(sgt => <div key={shortid.generate()} onClick={() => navigate(`/products/${sgt.id}`)}>{`${sgt.brand}-${sgt.model}`}</div>)}</div>
        </div>
    )

}

export default SearchBar