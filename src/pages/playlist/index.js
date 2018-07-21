import React from "react";

import "./styles.scss";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

export const Playlist = () => (
  <div className="playlist">
    <div className="playlist__header">
      <img
        src="http://www.progarchives.com/progressive_rock_discography_covers/2629/cover_4121221842012_r.jpg"
        alt="Playlist"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Rock</h1>
        <p>13 Músicas</p>

        <button>PLAY</button>
      </div>
    </div>

    <table className="playlist__song-list" cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Album</th>
        <th>
          <img src={ClockIcon} alt="Duracão" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>

        <tr>
        <td>
          <img src={PlusIcon} alt="Adicionar" />
        </td>
        <td>Papercut</td>
        <td>Linkin Park</td>
        <td>Hybrid Theory</td>
        <td>3:26</td>
      </tr>

      <tr>
      <td>
        <img src={PlusIcon} alt="Adicionar" />
      </td>
      <td>Papercut</td>
      <td>Linkin Park</td>
      <td>Hybrid Theory</td>
      <td>3:26</td>
    </tr>

    <tr>
    <td>
      <img src={PlusIcon} alt="Adicionar" />
    </td>
    <td>Papercut</td>
    <td>Linkin Park</td>
    <td>Hybrid Theory</td>
    <td>3:26</td>
  </tr>

  <tr>
  <td>
    <img src={PlusIcon} alt="Adicionar" />
  </td>
  <td>Papercut</td>
  <td>Linkin Park</td>
  <td>Hybrid Theory</td>
  <td>3:26</td>
</tr>

<tr>
<td>
  <img src={PlusIcon} alt="Adicionar" />
</td>
<td>Papercut</td>
<td>Linkin Park</td>
<td>Hybrid Theory</td>
<td>3:26</td>
</tr>

<tr>
<td>
  <img src={PlusIcon} alt="Adicionar" />
</td>
<td>Papercut</td>
<td>Linkin Park</td>
<td>Hybrid Theory</td>
<td>3:26</td>
</tr>
      </tbody>
    </table>
  </div>
);

export default Playlist;
