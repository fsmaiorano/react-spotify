import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import Loading from "../../components/Loading";
import "./styles.scss";

class Browse extends Component {
  static PropTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          thumbnail: PropTypes.string,
          description: PropTypes.string
        })
      )
    }).isRequired
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <div className="browse">
        <div className="browse__title">
          <h1>Navegar {this.props.playlists.loading && <Loading height={30} />}</h1>
        </div>

        <div className="browse__list-of-playlist">
          {this.props.playlists.data.map(playlist => (
            <Link
              key={playlist.id}
              to={`/playlists/${playlist.id}`}
              className="browse__playlist"
            >
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Link>
          ))}
        </div>
      </div>
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
)(Browse);
