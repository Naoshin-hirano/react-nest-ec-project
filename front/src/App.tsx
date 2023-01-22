import React, { useEffect } from "react";
import { Outlet, Router } from "@tanstack/react-location";
import { Provider } from "react-redux";
import { store } from "./core/store";
import { location, routes } from "./route";
import { Header } from "ui/component/organism/common/header";
import { Footer } from "ui/component/organism/common/footer";
import * as Usecase from "core/usecase/common";
import axios from "axios";

function App() {
    axios.defaults.withCredentials = true;
    useEffect(() => {
        Usecase.getAuthInfo();
    }, []);
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
