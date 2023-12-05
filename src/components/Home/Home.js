import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Hearder/Header";
import Cookies from "js-cookie";
import MainPage from "../MainPage/MainPage";
import { Link } from "react-router-dom";

const Home = ({ handleToggleSidebar, isSidebarVisible }) => {
    const cookie = Cookies.get("isCookie");
    const [isCookie, setIsCookie] = useState(cookie);
    console.log(typeof cookie);
    const encodedURL = "https%3A%2F%2Fwww.viettassaigon.vn%2F";
    const decodedURL = decodeURIComponent(encodedURL);

    console.log(decodedURL);
    return (
        <div>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className={isSidebarVisible ? "toggle-sidebar" : ""}>
                <SideBar />
            </div>
            <MainPage isSidebarVisible={isSidebarVisible} />
            {isCookie === "false" ? (
                <div className="card cook_tag">
                    <span
                        aria-hidden="true"
                        className="btn_cooks"
                        onClick={() => {
                            Cookies.set("isCookie", "true");
                            setIsCookie(false);
                        }}
                    >
                        &times;
                    </span>
                    <div className="card-body">
                        <p className="card-text">
                            Chúng tôi đang sử dụng cookie để cung cấp cho bạn
                            những trải nghiệm tốt nhất trên trang web này. Bằng
                            cách tiếp tục truy cập, bạn đồng ý với{" "}
                            <Link to="/FAQ">
                                Chính sách thu thập và sử dụng cookie của chúng
                                tôi.
                            </Link>
                        </p>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Home;
