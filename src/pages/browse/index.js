import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Browse = () => (
  <div className="browse">
    <div className="browse__title">
      <h1>Navegar</h1>
    </div>

    <div className="browse__list-of-playlist">
      <Link to="/playlists/1" className="browse__playlist">
        <img
          src="http://www.progarchives.com/progressive_rock_discography_covers/2629/cover_4121221842012_r.jpg"
          alt="Album"
        />
        <strong>Rock</strong>
        <p>Melhores do rock que você curte ouvir enquanto trabalha</p>
      </Link>
    </div>
  </div>
);

export default Browse;
