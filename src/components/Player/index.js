import React from "react";
import Slider from "rc-slider";

import "./styles.scss";

import volumeIcon from "../../assets/images/volume.svg";
import shuffleIcon from "../../assets/images/shuffle.svg";
import backwardIcon from "../../assets/images/backward.svg";
import playIcon from "../../assets/images/play.svg";
import pauseIcon from "../../assets/images/pause.svg";
import forwardIcon from "../../assets/images/forward.svg";
import repeatIcon from "../../assets/images/repeat.svg";

const Player = () => (
  <div className="player">
    <div className="player__current-music">
      <img
        src="http://www.progarchives.com/progressive_rock_discography_covers/2629/cover_4121221842012_r.jpg"
        alt="Album"
      />
      <div className="player__current-music-info">
        <span>The Trooper</span>
        <small>Iron Maiden</small>
      </div>
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

export default Player;
