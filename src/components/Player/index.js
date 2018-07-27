import React, { Fragment } from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import "./styles.scss";

import volumeIcon from "../../assets/images/volume.svg";
import shuffleIcon from "../../assets/images/shuffle.svg";
import backwardIcon from "../../assets/images/backward.svg";
import playIcon from "../../assets/images/play.svg";
import pauseIcon from "../../assets/images/pause.svg";
import forwardIcon from "../../assets/images/forward.svg";
import repeatIcon from "../../assets/images/repeat.svg";

const Player = ({ player }) => (
  <div className="player">
    {!!player.currentSong && (
      <Sound url={player.currentSong.file} playStatus={player.status} />
    )}

    <div className="player__current-music">
      {!!player.currentSong && (
        <Fragment>
          <img
            src={player.currentSong.thumbnail}
            alt={player.currentSong.title}
          />
          <div className="player__current-music-info">
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </Fragment>
      )}
    </div>

    <div className="player__handle">
      <div className="player__handle-controls">
        <button>
          <img src={shuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={backwardIcon} alt="Backward" />
        </button>
        <button>
          <img src={playIcon} alt="Play" />
        </button>
        <button>
          <img src={forwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={repeatIcon} alt="Repeat" />
        </button>
      </div>

      <div className="player__time">
        <span>1:39</span>
        <div className="player__time-progress">
          <Slider
            railStyle="{{background: '#404040' , border-radius: 10}}"
            trackStyle="{{ background: '##1ED760'}}"
            handleStyle="{{border: 0}}"
          />
        </div>
        <span>4:42</span>
      </div>
    </div>

    <div className="player__volume">
      <img src={volumeIcon} alt="Volume" />
      <Slider
        railStyle="{{background: '#404040' , border-radius: 10}}"
        trackStyle="{{ background: '#FFF'}}"
        handleStyle="{{display: 'none'}}"
        value={100}
      />
    </div>
  </div>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      file: PropTypes.string
    }),
    status: PropTypes.string
  }).isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(Player);
