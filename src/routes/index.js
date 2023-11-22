import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import BasicEncr from "../views/BasicEncr";


const AppRouter = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route exact path="/" element={<BasicEncr/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;  