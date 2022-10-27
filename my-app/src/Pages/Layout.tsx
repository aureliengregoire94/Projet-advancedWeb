import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";

let Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;