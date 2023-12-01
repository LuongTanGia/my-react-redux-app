import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ErrorPage from "../util/ErrorPage";
import DashBoar from "../DashBoar/DashBoar";

function MainPage({ isSidebarVisible }) {
    return (
        <>
            <main
                id="main"
                className="main"
                style={
                    isSidebarVisible
                        ? { marginLeft: "0px" }
                        : { marginLeft: "300px" }
                }
            >
                <Routes>
                    <Route path="/" element={<DashBoar />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
        </>
    );
}

export default MainPage;
