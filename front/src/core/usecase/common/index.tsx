import { Outlet } from "@tanstack/react-location";
import { fetchAuthInfo } from "core/api/common/service";
import { dispatch } from "core/store";
import { UIAuthAction } from "core/store/ui/auth/actions";
import { UIAuthSelector } from "core/store/ui/auth/selector";
import React from "react";
import { useSelector } from "react-redux";
import { Login } from "ui/component/organism/login";

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

// ログイン済みかの判定
const useAuth = () => {
    const user = useSelector(UIAuthSelector);
    return user && user.authState.status;
};

// ログインしていない場合の遷移権限を限定
export const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Login />;
};
