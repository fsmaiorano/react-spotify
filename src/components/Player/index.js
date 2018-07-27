import React, { Fragment } from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlayerActions } from "../../store/ducks/player";

import "./styles.scss";

import volumeIcon from "../../assets/images/volume.svg";
import shuffleIcon from "../../assets/images/shuffle.svg";
import backwardIcon from "../../assets/images/backward.svg";
import playIcon from "../../assets/images/play.svg";
import pauseIcon from "../../assets/images/pause.svg";
import forwardIcon from "../../assets/images/forward.svg";
import repeatIcon from "../../assets/images/repeat.svg";

const Player = ({
  player,
  play,
  pause,
  next,
  prev,
  playing,
  position,
  duration,
  handlePosition,
  setPosition,
  positionShown,
  progress,
}) => (
  <div className="player">
    {!!player.currentSong && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
        onFinishedPlaying={next}
        onPlaying={playing}
        position={player.position}
      />
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
        <button onClick={prev}>
          <img src={backwardIcon} alt="Backward" />
        </button>
        {!!player.currentSong && player.status === Sound.status.PLAYING ? (
          <button onClick={pause}>
            <img src={pauseIcon} alt="Pause" />
          </button>
        ) : (
          <button onClick={play}>
            <img src={playIcon} alt="Play" />
          </button>
        )}
        <button onClick={next}>
          <img src={forwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={repeatIcon} alt="Repeat" />
        </button>
      </div>

      <div className="player__time">
        <span>{positionShown || position}</span>
        <div className="player__time-progress">
          <Slider
            railStyle="{{background: '#404040' , border-radius: 10}}"
            trackStyle="{{ background: '##1ED760'}}"
            handleStyle="{{border: 0}}"
            max={1000}
            onChange={value => handlePosition(value / 1000)}
            onAfterChange={value => setPosition(value / 1000)}
            value={progress}
          />
        </div>
        <span>{duration}</span>
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
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  playing: PropTypes.func.isRequired,
  handlePosition: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  positionShown: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

function msToTime(duration) {
  if (!duration) return null;
  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
  positionShown: msToTime(state.player.positionShown),
  progress:
    parseInt((state.player.positionShown || state.player.position) *
    (1000 / state.player.duration), 10) || 0,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
