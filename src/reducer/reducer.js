const initialState = {
  data: [],
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POSTAPI":
      return {
        ...state,
        data: action.payload,
        loading: action.loading,
      };
    case "GETDATA":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
