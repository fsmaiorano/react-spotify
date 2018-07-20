import React from "react";

import "./styles.scss";

const Header = () => (
  <header className="header">
    <div className="header__search">
      <input placeholder="Search" />
    </div>

    <div className="header__user">
      <img
        src="https://avatars2.githubusercontent.com/u/5588353?v=4"
        alt="Avatar"
      />
      Fábio
    </div>
  </header>
);

export default Header;
