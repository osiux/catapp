import React from "react";
import { ReactQueryConfigProvider } from "react-query";

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
            <div className="container">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </ReactQueryConfigProvider>
    );
};

export default App;
