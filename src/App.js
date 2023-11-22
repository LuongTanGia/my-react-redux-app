// index.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import UserList from "./components/UserList";

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Redux CRUD Example</h1>
      <UserList />
    </div>
  </Provider>
);

export default App;
