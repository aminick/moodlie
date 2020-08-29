import React from 'react';
import TrackInfo from './TrackInfo';
import PlayerControl from './PlayerControl';

const Player = () => (
  <div className="player">
    <div className="container player__row">
      <div className="player__col left">
        <TrackInfo />
      </div>
      <div className="player__col center">
        <PlayerControl />
      </div>
      <div className="player__col right" />
    </div>
  </div>
);

export default Player;
