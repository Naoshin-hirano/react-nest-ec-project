import React from "react";
import { Outlet, Router } from "@tanstack/react-location";
import { Provider } from "react-redux";
import { store } from "./core/store";
import { location, routes } from "./route";
import "./App.css";
import { Header } from "ui/component/organism/common/header";
import { Footer } from "ui/component/organism/common/footer";

function App() {
    return (
        <Provider store={store}>
            <Router routes={routes} location={location}>
                <Header />
                <Outlet />
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
