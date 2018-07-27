import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./styles.scss";
import "./config/reactotron";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";
import ErrorBox from "./components/ErrorBox";

import Routes from "./routes";
import store from "./store";

const App = () => (
  /**
   * BrowserRouter - Quando envolvemos toda a aplicação com o browser router, todas os componentes terão acesso aos parâmetros da URL.
   */

  <Provider store={store}>
    <BrowserRouter>
      <main className="wrapper">
        <div className="container">
          <Sidebar />
          <div className="content">
            <ErrorBox />
            <Header />
            <Routes />
          </div>
        </div>
        <Player />
      </main>
    </BrowserRouter>
  </Provider>
);

export default App;
