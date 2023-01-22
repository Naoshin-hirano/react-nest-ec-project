import axios from "axios";

export const fetchProductList = async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response;
};

export const fetchCategoryList = async () => {
    const response = await axios.get("http://localhost:3000/category");
    return response;
};
