import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Currency from "./Pages/Currency";
import Stock from "./Pages/Stock";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Currency" element={<Currency />} />
                    <Route path="Stock" element={<Stock />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));