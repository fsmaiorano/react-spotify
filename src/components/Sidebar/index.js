import React from "react";

import "./styles.scss";
import addPlaylist from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <aside className="sidebar">
    <nav className="sidebar__navigation">
      <div className="sidebar__navigation-content sidebar__navigation-content--main">
        <li>
          <a href="javascript;">Navegar</a>
        </li>
        <li>
          <a href="javascript">Rádio</a>
        </li>
      </div>

      <div className="sidebar__navigation-content">
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="javascript">Seu Daily Mix</a>
        </li>
        <li>
          <a href="javascript">Tocados Recentemente</a>
        </li>
        <li>
          <a href="javascript">Músicas</a>
        </li>
        <li>
          <a href="javascript">Tocados Recentemente</a>
        </li>
        <li>
          <a href="javascript">Álbums</a>
        </li>
        <li>
          <a href="javascript">Artistas</a>
        </li>
        <li>
          <a href="javascript">Estações</a>
        </li>
        <li>
          <a href="javascript">Arquivos Locais</a>
        </li>
        <li>
          <a href="javascript">Vídeos</a>
        </li>
        <li>
          <a href="javascript">Podcasts</a>
        </li>
      </div>

      <div className="sidebar__navigation-content sidebar__navigation-content">
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="javascript">Melhores da Semana</a>
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
