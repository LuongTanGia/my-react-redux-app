import React from "react";
import { connect } from "react-redux";

const StateToProps = (state) => ({
  users: state.users,
});

const ListUser = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h2> Component 2</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default connect(StateToProps)(ListUser);
