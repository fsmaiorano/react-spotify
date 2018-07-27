import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistDetails";
import { Creators as PlayerActions } from "../../store/ducks/player";

import Loading from "../../components/Loading";

import "./styles.scss";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number
      })
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.title,
      description: PropTypes.description,
      songs: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.title,
          author: PropTypes.string,
          album: PropTypes.string
        })
      ),
      loading: PropTypes.bool
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number,
    }).isrequired,
  };

  state = {
    selectedSong: null
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;
    this.props.getPlaylistDetailsRequest(id);
  };

  getClass = song => {
    if (
      this.state.selectedSong === song.id &&
      this.props.currentSong &&
      this.props.currentSong.id === song.id
    ) {
      return "playlist__song-item playlist__song-item--selected playlist__song-item--playing";
    } 
    else if(this.state.selectedSong !== song.id && this.props.currentSong && this.props.currentSong.id === song.id)
    {
      return "playlist__song-item playlist__song-item--playing";
    }
    else if (this.state.selectedSong === song.id) {
      return "playlist__song-item playlist__song-item--selected";
    } else {
      return "playlist__song-item";
    }
  };

  renderDetails = () => {
    const playlist = this.props.playlistDetails.data;
    return (
      <div className="playlist">
        <div className="playlist__header">
          <img src={playlist.thumbnail} alt={playlist.title} />

          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}

            <button>PLAY</button>
          </div>
        </div>

        <table className="playlist__song-list" cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Título</th>
              <th>Artista</th>
              <th>Album</th>
              <th>
                <img src={ClockIcon} alt="Duracão" />
              </th>
            </tr>
          </thead>
          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <tr
                  className={this.getClass(song)}
                  key={song.id}
                  onClick={() => this.setState({ selectedSong: song.id })}
                  onDoubleClick={() => this.props.loadSong(song, playlist.songs)}
                >
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:26</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  };

  render() {
    return this.props.playlistDetails.loading ? (
      <div className="playlist--loading">
        <Loading height={50} />
      </div>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
