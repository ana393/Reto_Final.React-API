import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "../reducer/store.js";
import Home from "./Home.jsx";
import MoviesLists from "./MoviesLists.jsx";



function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movie/:id" component={MoviesLists} exact />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
