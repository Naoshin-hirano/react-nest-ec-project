import React from "react";
import "./index.scss";

export const Login: React.FC<any> = () => {
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
                            name="username"
                            placeholder="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">パスワード</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                        />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    ログインする
                </button>
            </div>
        </div>
    );
};
