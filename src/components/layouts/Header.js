import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header flex page-container-fluid mx-auto items-center justify-center gap-x-5 text-white py-10 mb-10">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "text-secondary" : undefined
                }
                end>
                Home
            </NavLink>
            <NavLink
                to="/movies"
                className={({ isActive }) =>
                    isActive ? "text-secondary" : undefined
                }>
                Movies
            </NavLink>
        </header>
    );
};

export default Header;
