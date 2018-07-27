import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import "./styles.scss";
import Loading from "../../components/Loading";
import addPlaylist from "../../assets/images/add_playlist.svg";

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string
        })
      ),
      loading: PropTypes.bool
    }).isRequired
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <aside className="sidebar">
        <nav className="sidebar__navigation">
          <div className="sidebar__navigation-content sidebar__navigation-content--main">
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="javascript;">Rádio</a>
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

          <div className="sidebar__navigation-content">
            <li>
              <span>PLAYLISTS</span>
              <div className="sidebar__navigation-loading">
                {this.props.playlists.loading && <Loading />}
              </div>
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </div>
        </nav>

        <div className="sidebar__new-playlist">
          <img src={addPlaylist} alt="" />
          <span>Nova Playlist</span>
        </div>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

// <svg className="icon">
// <use
//   href="../../assets/images/add_playlist.svg"
//   alt="Adcionar playlist"
// />
// </svg>
