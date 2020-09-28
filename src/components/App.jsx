import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "../reducer/store.js";
import Home from "./Home/Home.jsx";
import MoviesLists from "./MovieList/MoviesLists.jsx";
import Footer from './Container/Footer/Footer.jsx';
import './App.scss';



function App () {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/movie/:id" component={MoviesLists} exact />

          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
