import { useState, useEffect } from 'react';
import { getProductDetails } from '../services/requests';
import { useNavigate } from 'react-router-dom';

function useProductDetails(id) {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        getProductDetails(id)
            .then((res) => {
                setDetails(res.data)
                setLoading(false);
            }).catch(() => {
                navigate("/products/error");
                setLoading(false);
            });
    }, [id]);

    return [details, loading];
}

export default useProductDetails
