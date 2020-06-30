import React from "react";
import { ReactQueryConfigProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Breeds from "./pages/Breeds";

import "./App.scss";

const queryConfig = {
    queries: {
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
    },
};

const App = () => {
    return (
        <ReactQueryConfigProvider config={queryConfig}>
            <ReactQueryDevtools />
            <BrowserRouter>
                <div className="container">
                    <NavBar />
                    <Routes>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="/breeds">
                            <Breeds />
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </ReactQueryConfigProvider>
    );
};

export default App;
