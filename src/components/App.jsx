import React from "react";
import { Provider } from "react-redux";
import store from "../reducer/store.js";
import Header from "./Header/header.jsx";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
      </div>
    </Provider>
  );
}

export default App;
