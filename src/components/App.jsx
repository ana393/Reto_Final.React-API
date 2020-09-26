import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "../reducer/store.js";
import Home from "./Home.jsx";
import MovieDetail from "./MovieDetails.jsx";

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/" component={MovieDetail} exact />
        </Switch>
        <MovieDetail />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
