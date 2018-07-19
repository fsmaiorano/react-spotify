import React from "react";

import "./styles.scss";
import addPlaylist from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <aside className="sidebar">
    <nav className="sidebar__navigation">
      <div className="sidebar__navigation-content sidebar__navigation-content--main">
        <li>
          <a href="#">Navegar</a>
        </li>
        <li>
          <a href="#">Rádio</a>
        </li>
      </div>

      <div className="sidebar__navigation-content">
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="#">Seu Daily Mix</a>
        </li>
        <li>
          <a href="#">Tocados Recentemente</a>
        </li>
        <li>
          <a href="#">Músicas</a>
        </li>
        <li>
          <a href="#">Tocados Recentemente</a>
        </li>
        <li>
          <a href="#">Álbums</a>
        </li>
        <li>
          <a href="#">Artistas</a>
        </li>
        <li>
          <a href="#">Estações</a>
        </li>
        <li>
          <a href="#">Arquivos Locais</a>
        </li>
        <li>
          <a href="#">Vídeos</a>
        </li>
        <li>
          <a href="#">Podcasts</a>
        </li>
      </div>

      <div className="sidebar__navigation-content sidebar__navigation-content">
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="#">Melhores da Semana</a>
        </li>
      </div>
    </nav>

    <div className="sidebar__new-playlist">
      <img src={addPlaylist} alt="" />
      <span>Nova Playlist</span>
    </div>
  </aside>
);

export default Sidebar;

// <svg className="icon">
// <use
//   href="../../assets/images/add_playlist.svg"
//   alt="Adcionar playlist"
// />
// </svg>
