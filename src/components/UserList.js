import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers, addUser, updateUser, deleteUser } from "../action/action";
import ListUser from "./ListUser";
const UserList = ({ users, fetchUsers, addUser, updateUser, deleteUser }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  const [user, setUser] = useState({
    name: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleAddUser = () => {
    addUser(user);
  };
  const handleData = (name) => {
    setUser({ name: name });
  };
  const handleUpdateUser = (id) => {
    const updatedUser = user;
    updateUser(id, updatedUser);
  };

  const handleDeleteUser = (id) => {
    deleteUser(id);
  };

  console.log(users);
  return (
    <div>
      <input
        type="text"
        name="name"
        required
        placeholder="name"
        value={user.name}
        onChange={onChangeInput}
      />
      <button onClick={handleAddUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleData(user.name)}>
            {user.name}
            <button onClick={() => handleUpdateUser(user.id)}>Update</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <ListUser />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
