import React, { useState } from "react";
import { connect } from "react-redux";
import { POSTAPI } from "../../action/action";
import API from "../../API/API";
import Cookies from "js-cookie";
import VietTas from "../../assets/img/viettas.jfif";
import "./auth.css";

const UserList = ({ data, POSTAPI }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [user, setUser] = useState({
        User: "",
        Pass: "",
    });
    console.log(data);
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const handleAddUser = () => {
        localStorage.setItem("userLogin", btoa(JSON.stringify(user)));
        POSTAPI(API.DANHSACHDULIEU, user);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        localStorage.setItem("remoteDB", event.target.value);
    };

    const handleLogin = () => {
        POSTAPI(API.DANGNHAP, { TokenID: data.TKN, RemoteDB: selectedOption });
        localStorage.setItem("firstLogin", true);
        Cookies.set("isCookie", "false");
        window.location.href = "/";
    };
    return (
        <>
            <main className="bg-color">
                <div className="container">
                    <div className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-center py-4">
                                                <a
                                                    href="index.html"
                                                    className="logo d-flex align-items-center w-auto"
                                                >
                                                    <img
                                                        src={VietTas}
                                                        alt="VietTas"
                                                    />
                                                </a>
                                            </div>
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">
                                                    Login to Your Account
                                                </h5>
                                                <p className="text-center small">
                                                    Enter your username &
                                                    password to login
                                                </p>
                                            </div>

                                            <div className="row g-3 needs-validation">
                                                <div className="col-12">
                                                    <label
                                                        for="yourUsername"
                                                        className="form-label"
                                                    >
                                                        Username
                                                    </label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text">
                                                            @
                                                        </span>
                                                        <input
                                                            className="form-control"
                                                            type="email"
                                                            name="User"
                                                            required
                                                            //   autoComplete="on"
                                                            placeholder="Email *"
                                                            value={user.User}
                                                            onChange={
                                                                onChangeInput
                                                            }
                                                        />
                                                        <div className="invalid-feedback">
                                                            Please enter your
                                                            username.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label
                                                        for="yourPassword"
                                                        className="form-label"
                                                    >
                                                        Password
                                                    </label>

                                                    <input
                                                        className="form-control"
                                                        type="password"
                                                        name="Pass"
                                                        required
                                                        // autoComplete="on"
                                                        placeholder="Password *"
                                                        value={user.Pass}
                                                        onChange={onChangeInput}
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter your
                                                        password!
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="remember"
                                                            value="true"
                                                            id="rememberMe"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            for="rememberMe"
                                                        >
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button
                                                        className="btn btn-primary w-100"
                                                        onClick={handleAddUser}
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">
                                                        Don't have account?{" "}
                                                        <a href="pages-register.html">
                                                            Create an account
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="credits">
                                        Designed by{" "}
                                        <a href="https://bootstrapmade.com/">
                                            BootstrapMade
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1
                                    class="modal-title fs-5"
                                    id="exampleModalLabel"
                                >
                                    {data.DataResults
                                        ? "DANH SÁCH DỮ LIỆU"
                                        : "ERROR LOGIN"}
                                </h1>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                {data.DataResults ? (
                                    data.DataResults.map((item, index) =>
                                        item.RemoteDB ? (
                                            <div key={index}>
                                                {item.RemoteDB}
                                                <input
                                                    type="radio"
                                                    value={item.RemoteDB}
                                                    checked={
                                                        selectedOption ===
                                                        item.RemoteDB
                                                    }
                                                    name="remoteDB"
                                                    onChange={
                                                        handleOptionChange
                                                    }
                                                />
                                            </div>
                                        ) : null
                                    )
                                ) : (
                                    <p classNameName="error_login">
                                        {data.DataErrorDescription}
                                    </p>
                                )}
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    onClick={handleLogin}
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

const mapStateToProps = (state) => ({
    data: state.data,
});

const mapDispatchToProps = {
    POSTAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
