// index.js
import React, { useEffect } from "react";
import Login from "./components/Auth/Login";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { GETDATA } from "./action/action";
import { connect } from "react-redux";
import API from "./API/API";
// import CheckMode from "./components/mode/CheckMode";
import Home from "./components/Home/Home";

const App = ({ GETDATA }) => {
  const userLogin = localStorage.getItem("userLogin");
  const RemoteDB = localStorage.getItem("remoteDB");

  const userLoginAtob = JSON.parse(userLogin ? atob(userLogin) : userLogin);

  useEffect(() => {
    if (RemoteDB && userLoginAtob) {
      GETDATA(API.DANHSACHDULIEU, API.DANGNHAP, userLoginAtob, RemoteDB);
      console.log(1);
    }
  }, [GETDATA]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
const mapDispatchToProps = {
  GETDATA,
};

export default connect(null, mapDispatchToProps)(App);
