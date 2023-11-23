import React, { useState } from "react";
import { connect } from "react-redux";
import { POSTAPI } from "../action/action";
import API from "../API/API";
import { Link } from "react-router-dom";

const UserList = ({ data, POSTAPI }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [user, setUser] = useState({
    User: "",
    Pass: "",
  });

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
  };
  return (
    <div>
      <div className="form-group">
        <input
          className="form-control"
          type="email"
          name="User"
          required
          //   autoComplete="on"
          placeholder="Email *"
          value={user.User}
          onChange={onChangeInput}
        />
      </div>
      <div className="form-group">
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
      </div>
      <div className="form-group">
        <button onClick={handleAddUser}>submit</button>
      </div>
      {data.DataResults ? (
        data.DataResults.map((item, index) =>
          item.RemoteDB ? (
            <div key={index}>
              {item.RemoteDB}
              <input
                type="radio"
                value={item.RemoteDB}
                checked={selectedOption === item.RemoteDB}
                name="remoteDB"
                onChange={handleOptionChange}
              />
            </div>
          ) : null
        )
      ) : (
        <p className="error_login">{data.DataErrorDescription}</p>
      )}
      <button onClick={handleLogin}>Login</button>

      {data.MappingUser ? (
        data.DataResults.map((item, index) => (
          <div key={index}>{item.TenChucNang}</div>
        ))
      ) : (
        <p className="error_login">{data.DataErrorDescription}</p>
      )}

      <Link to="/list">TO LIST</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {
  POSTAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
