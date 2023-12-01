// index.js
import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import {
    Route,
    Routes,
    BrowserRouter as Router,
    Navigate,
} from "react-router-dom";
import { GETDATA, DATATONGHOP } from "./action/action";
import { connect } from "react-redux";
import API from "./API/API";
// import CheckMode from "./components/mode/CheckMode";
import Home from "./components/Home/Home";

import ErrorPage from "./components/util/ErrorPage";
const App = ({ GETDATA }) => {
    const userLogin = localStorage.getItem("userLogin");
    const RemoteDB = localStorage.getItem("remoteDB");
    const TKN = localStorage.getItem("TKN");

    const userLoginAtob = JSON.parse(userLogin ? atob(userLogin) : userLogin);

    useEffect(() => {
        if (RemoteDB && userLoginAtob) {
            GETDATA(API.DANHSACHDULIEU, API.DANGNHAP, userLoginAtob, RemoteDB);
            DATATONGHOP(API.TONGHOP, TKN);
        }
    }, [GETDATA]);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    const isLogged = localStorage.getItem("firstLogin");
    return (
        <Router>
            <Routes>
                <Route
                    path="*"
                    element={
                        isLogged === "true" ? (
                            <Home
                                handleToggleSidebar={handleToggleSidebar}
                                isSidebarVisible={isSidebarVisible}
                            />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/"
                    element={
                        isLogged === "true" ? (
                            <Home
                                handleToggleSidebar={handleToggleSidebar}
                                isSidebarVisible={isSidebarVisible}
                            />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

const mapDispatchToProps = {
    GETDATA,
    DATATONGHOP,
};

export default connect(null, mapDispatchToProps)(App);
