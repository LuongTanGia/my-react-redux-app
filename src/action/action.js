import axios from "axios";

export const POSTAPI = (API, dataPost) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(API, dataPost);

            dispatch({
                type: "POSTAPI",
                payload: response.data,
                loading: true,
            });
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };
};

// export const SETMODE = (mode, dispatch) => {
//   // type: "SETMODE",
//   return dispatch({ type: "SETMODE", payload: mode });
// };

export const GETDATA = (API, API2, dataPost, RemoteDB) => {
    return async (dispatch) => {
        try {
            const DATADULIEU = await axios.post(API, dataPost);
            const DATADANGNHAP = await axios.post(API2, {
                TokenID: DATADULIEU.data.TKN,
                RemoteDB: RemoteDB,
            });
            localStorage.setItem("TKN", DATADANGNHAP.data.TKN);

            dispatch({ type: "GETDATA", payload: DATADANGNHAP.data });
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };
};

export const DATATONGHOP = (API, dataPost) => {
    return async (dispatch) => {
        try {
            const DATATONGHOP = await axios.post(API, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${dataPost}`,
                },
            });
            console.log(DATATONGHOP, "dataTongHop");
            dispatch({
                type: "GETDATATONGHOP",
                payload: DATATONGHOP,
            });
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };
};
// export const fetchUsers = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(API.USER);
//       dispatch({ type: "FETCH_USERS", payload: response.data });
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };
// };

// export const updateUser = (id, updatedUser) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.put(`${API.USER}/${id}`, updatedUser);
//       dispatch({ type: "UPDATE_USER", payload: response.data });
//     } catch (error) {
//       console.error("Error updating user:", error);
//     }
//   };
// };

// export const deleteUser = (id) => {
//   return async (dispatch) => {
//     try {
//       await axios.delete(`${API.USER}/${id}`);
//       dispatch({ type: "DELETE_USER", payload: id });
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };
// };
