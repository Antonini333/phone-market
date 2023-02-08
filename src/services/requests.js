import axios from "axios";

export const getProductsList = () => axios.get("https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/product");
export const getProductDetails = (id) => axios.get(`https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/product/${id}`);
export const addToChart = (product) => axios.post("https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/cart", product);
