import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Hearder/Header";

import MainPage from "../MainPage/MainPage";

const Home = ({ handleToggleSidebar, isSidebarVisible }) => {
    return (
        <div>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className={isSidebarVisible ? "toggle-sidebar" : ""}>
                <SideBar />
            </div>
            <MainPage isSidebarVisible={isSidebarVisible} />
        </div>
    );
};

export default Home;
