import React from "react";

import "./styles.scss";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

const App = () => (
  <main className="wrapper">
    <div className="container">
      <Sidebar />
      <div className="content">
        <Header />
      </div>
    </div>
    <Player />
  </main>
);

export default App;
