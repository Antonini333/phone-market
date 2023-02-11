import { useState, useEffect } from 'react';
import axios from 'axios';
import { getProductDetails } from '../services/requests';

function useProductDetails(id) {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        getProductDetails(id)
            .then((res) => {
                setDetails(res.data)
                setLoading(false);
            }).catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    return [details, loading];
}

export default useProductDetails
