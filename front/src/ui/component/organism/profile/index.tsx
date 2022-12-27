import React from "react";
import { history } from "../../../../route/history";
import { FavoriteList } from "./FavoriteList";
import "./index.scss";

export const Profile: React.FC<any> = () => {
    const logout = () => {
        history.push("/login");
    };
    return (
        <div className="profile-header">
            <img
                src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-vector-user-young-boy-avatar-icon-png-image_4827810.jpg"
                className="profile-picture"
                alt="Profile"
            />
            <div className="profile-name">Naoya Hirano</div>
            <div className="profile-links">
                🖥&nbsp;
                <a
                    href="https://github.com/Naoshin-hirano"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* {userData.website} */}
                    Githubのマイページ
                </a>
            </div>
            <button
                className="btn-primary"
                onClick={() => {
                    logout();
                }}
            >
                ログアウト
            </button>
            <FavoriteList />
        </div>
    );
};
