import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./styles.scss";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

import Routes from "./routes";

const App = () => (
  /**
   * BrowserRouter - Quando envolvemos toda a aplicação com o browser router, todas os componentes terão acesso aos parâmetros da URL.
   */

  <BrowserRouter>
    <main className="wrapper">
      <div className="container">
        <Sidebar />
        <div className="content">
          <Header />
          <Routes />
        </div>
      </div>
      <Player />
    </main>
  </BrowserRouter>
);

export default App;
