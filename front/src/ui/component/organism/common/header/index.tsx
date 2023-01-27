import { Link } from "@tanstack/react-location";
import { UIAuthSelector } from "core/store/ui/auth/selector";
import { UICartSelector } from "core/store/ui/cart/selector";
import { UICategorySelector } from "core/store/ui/category/selector";
import { UICategory } from "core/store/ui/category/type";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./index.scss";

export const Header = () => {
    const cartState = useSelector(UICartSelector);
    const categoryState = useSelector(UICategorySelector);
    const authState = useSelector(UIAuthSelector);
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
                            {authState.authState.status && (
                                <Link
                                    to={`/profile/${authState.authState.id}`}
                                    className="add-to-cart-btn flex"
                                >
                                    <img
                                        src={authState.authState.imageName}
                                        alt="Avatar"
                                        className="btn-avatar"
                                    ></img>
                                </Link>
                            )}
                            <Link
                                to="/product/cart/"
                                className="add-to-cart-btn flex"
                            >
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
                            {categoryState.categoryList.map(
                                (category: UICategory) => (
                                    <li key={category.id}>
                                        <Link
                                            to={`/category/${category.id}`}
                                            className="nav-link text-white"
                                            onClick={() =>
                                                setIsSidebarOpen(false)
                                            }
                                        >
                                            {category.name}
                                        </Link>
                                    </li>
                                )
                            )}
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
