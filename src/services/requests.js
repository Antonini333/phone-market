import axios from "axios";

export const getProductsList = () => axios.get("https://itx-frontend-test.onrender.com/api/product");
export const getProductDetails = (id) => axios.get(`https://itx-frontend-test.onrender.com/api/product/${id}`);
export const addToCart = (product) => axios.post("https://itx-frontend-test.onrender.com/api/cart", product);
