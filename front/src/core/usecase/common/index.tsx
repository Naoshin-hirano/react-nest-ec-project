import { fetchAuthInfo } from "core/api/common/service";
import { dispatch } from "core/store";
import { UIAuthAction } from "core/store/ui/auth/actions";

// ログインユーザーをcookie内のjwtから取得
export const getAuthInfo = async () => {
    const result = await fetchAuthInfo();
    const loginUser = {
        id: result.data.id,
        username: result.data.username,
        status: true,
        imageName: result.data.imageURL,
    };
    dispatch(UIAuthAction.setAuthState(loginUser));
};
