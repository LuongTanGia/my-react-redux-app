import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      dispatch({ type: "FETCH_USERS", payload: response.data });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/users", user);
      dispatch({ type: "ADD_USER", payload: response.data });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
};

export const updateUser = (id, updatedUser) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/users/${id}`,
        updatedUser
      );
      dispatch({ type: "UPDATE_USER", payload: response.data });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      dispatch({ type: "DELETE_USER", payload: id });
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
};
