import Axios from "axios";

export const postLogin = (username: string, password: string) => {
    const url = "http://localhost:3000/auth/signin";
    const body = { username, password };
    const response = Axios.post(url, body);
    return response;
};

export const postLogout = async () => {
    const url = "http://localhost:3000/auth/signout";
    const response = await Axios.post(url);
    console.log(response.data);
    return response;
};
