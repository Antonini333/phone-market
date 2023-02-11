import { useState, useEffect } from 'react';
import { getProductDetails } from '../services/requests';
import { useNavigate } from 'react-router-dom';

function useProductDetails(id) {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        getProductDetails(id)
            .then(({data}) => {
                setDetails(data);
                setLoading(false);
            }).catch(() => {
                navigate("/products/error");
                setLoading(false);
            });
    }, [id, navigate]);

    return [details, loading];
}

export default useProductDetails
