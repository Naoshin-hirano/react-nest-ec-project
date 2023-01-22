import { postLogin, postLogout } from "core/api/login/service";
import { dispatch } from "core/store";
import { UIAuthAction } from "core/store/ui/auth/actions";

// ログイン時
export const sendLoginInfo = async (username: string, password: string) => {
    const result = await postLogin(username, password);
    const loginUser = {
        id: result.data.id,
        username: result.data.username,
        imageName: result.data.imageURL,
        status: true,
    };
    dispatch(UIAuthAction.setAuthState(loginUser));
    return loginUser;
};

// ログアウト
export const sendLogout = async () => {
    const result = await postLogout();
    const logoutUser = {
        id: "",
        username: "",
        imageName: "",
        status: false,
    };
    dispatch(UIAuthAction.setAuthState(logoutUser));
    return result.data;
};
