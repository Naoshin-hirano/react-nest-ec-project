import React from "react";
import { Outlet, Router } from "@tanstack/react-location";
import { Provider } from "react-redux";
import { store } from "./core/store";
import { location, routes } from "./route";
import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <Router routes={routes} location={location}>
                <Outlet />
            </Router>
        </Provider>
    );
}

export default App;
