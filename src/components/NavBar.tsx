import React from "react";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/" />
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        activeClassName="active"
                        to="/"
                        end
                    >
                        Home <span className="sr-only">(current)</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        activeClassName="active"
                        to="/breeds"
                    >
                        Breeds
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;
