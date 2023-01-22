import React, { useState } from "react";
import "./index.scss";
import * as Usecase from "../../../../core/usecase/login";
import { history } from "../../../../route/history";

export const Login: React.FC<any> = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = async (username: string, password: string) => {
        await Usecase.sendLoginInfo(username, password);
        history.push("/");
    };

    return (
        <div className="base-container">
            <div className="header">ログイン</div>
            <a href="/register">新規アカウント登録へ</a>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">ユーザー名</label>
                        <input
                            type="text"
                            value={username}
                            name="username"
                            placeholder="username"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">パスワード</label>
                        <input
                            type="password"
                            value={password}
                            name="password"
                            placeholder="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button
                    type="button"
                    className="btn"
                    onClick={() => {
                        login(username, password);
                    }}
                >
                    ログインする
                </button>
            </div>
        </div>
    );
};
