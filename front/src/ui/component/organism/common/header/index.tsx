import { Link } from "@tanstack/react-location";
import { UICartSelector } from "core/store/ui/cart/selector";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./index.scss";

export const Header = () => {
    const cartState = useSelector(UICartSelector);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="container">
                    <div className="navbar-top flex flex-between">
                        <Link to="/" className="navbar-brand">
                            <span className="text-regal-blue">ECゴルフ</span>
                        </Link>

                        <form className="navbar-search flex">
                            <input type="text" placeholder="検索 ..." />
                            <button type="submit" className="navbar-search-btn">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>

                        <div className="navbar-btns">
                            <Link
                                to="/profile/1"
                                className="add-to-cart-btn flex"
                            >
                                <i className="fa-solid fa-user"></i>
                            </Link>
                            <Link to="/cart" className="add-to-cart-btn flex">
                                <span className="btn-ico">
                                    <i className="fas fa-shopping-cart"></i>
                                </span>
                                <div className="btn-txt fw-5">
                                    <span className="cart-count-value">
                                        {cartState.totalQty}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="navbar-bottom bg-regal-blue">
                    <div className="container flex flex-between">
                        <ul
                            className={`nav-links flex ${
                                isSidebarOpen ? "show-nav-links" : ""
                            }`}
                        >
                            <button
                                type="button"
                                className="navbar-hide-btn text-white"
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                <i className="fas fa-times"></i>
                            </button>
                            {/* {categories.map((category) => ( */}
                            <li>
                                <Link
                                    to={`/category/1`}
                                    className="nav-link text-white"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    ドライバー
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/category/2`}
                                    className="nav-link text-white"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    アイアン
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/category/3`}
                                    className="nav-link text-white"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    パター
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/category/4`}
                                    className="nav-link text-white"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    ユーティリティ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/category/5`}
                                    className="nav-link text-white"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    ポール
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/category/3`}
                                    className="nav-link text-white"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    その他
                                </Link>
                            </li>
                            {/* ))} */}
                        </ul>

                        <button
                            type="button"
                            className="navbar-show-btn text-gold"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
