// App.js
import React from "react";
import "./checkmode.css";
import { SETMODE } from "../../action/action";
import { connect } from "react-redux";

const CheckMode = ({ mode, dispatch }) => {
  const toggleMode = () => {
    const newMode = !mode;
    SETMODE(newMode, dispatch);
  };

  return (
    <div className={`App ${mode ? "dark-mode" : "light-mode"}`}>
      <div className="toggle-container">
        <label className="switch">
          <button onClick={toggleMode}>MODE</button>
          <span className="slider round"></span>
        </label>
        <p>{mode ? "Dark Mode" : "Light Mode"}</p>
      </div>

      <h1>Welcome to my React App!</h1>
      
    </div>
  );
};
const StateToProps = (state) => ({
  mode: state.mode,
});

export default connect(StateToProps)(CheckMode);
