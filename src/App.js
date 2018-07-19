import React from "react";

import "./styles.scss";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

const App = () => (
  <main className="wrapper">
    <div className="container">
      <Sidebar />
    </div>
    <Player />
  </main>
);

export default App;
