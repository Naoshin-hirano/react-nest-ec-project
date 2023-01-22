import Axios from "axios";

export const fetchAuthInfo = () => {
    const url = "http://localhost:3000/auth/profile";
    const response = Axios.get(url);
    return response;
};
