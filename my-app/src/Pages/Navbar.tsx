import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id="header">
            <div className="buttons">
                <Link to="/Currency"><button className="button" type="button"><span>Currency</span></button></Link>
            </div>
            <Link to="/"><header>Analysis platform</header></Link>
            <div className="buttons">
                <Link to="/Stock"><button className="button" type="button"><span>Stock</span></button></Link>
            </div>
        </div>
    );
}

export default Navbar;