import Axios from "axios";

export const postUserAccount = async (data: any) => {
    const url = "http://localhost:3000/auth/signup";
    const response = await Axios.post(url, data);
    return response;
};
