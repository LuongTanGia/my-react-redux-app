// index.js
import React, { useEffect } from "react";
import UserList from "./components/UserList";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ListData from "./components/ListData";
import { GETDATA } from "./action/action";
import { connect } from "react-redux";
import API from "./API/API";

const App = ({ GETDATA }) => {
  const userLogin = localStorage.getItem("userLogin");
  const RemoteDB = localStorage.getItem("remoteDB");

  const userLoginAtob = JSON.parse(userLogin ? atob(userLogin) : userLogin);
  useEffect(() => {
    GETDATA(API.DANHSACHDULIEU, API.DANGNHAP, userLoginAtob, RemoteDB);
    console.log(1);
  }, [GETDATA]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/list" element={<ListData />} />
      </Routes>
    </Router>
  );
};
const mapDispatchToProps = {
  GETDATA,
};

export default connect(null, mapDispatchToProps)(App);
