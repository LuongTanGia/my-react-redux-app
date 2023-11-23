import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const StateToProps = (state) => ({
  data: state.data,
});

const ListData = ({ data }) => {
  return (
    <div>
      <h2> Component 2</h2>
      <ul>
        {data.DataResults
          ? data.DataResults.map((item, index) => (
              <div key={index}>{item.TenChucNang}</div>
            ))
          : null}
      </ul>

      <Link to="/">TO HOME</Link>
    </div>
  );
};

export default connect(StateToProps)(ListData);
