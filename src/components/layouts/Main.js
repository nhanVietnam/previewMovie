import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="px-5">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
