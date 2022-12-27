import React from "react";
import "./index.scss";

export const Register: React.FC<any> = () => {
    return (
        <div className="base-container">
            <div className="header">新規アカウント登録</div>
            <a href="/login">ログイン画面へ</a>
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
                        <label htmlFor="username">Eメール</label>
                        <input type="email" name="email" placeholder="email" />
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
                    新規アカウントを登録する
                </button>
            </div>
        </div>
    );
};
