import React from 'react';
import { useSelector } from 'react-redux';
import { getNowPlaying } from '../../../redux/selectors/player';
import { getTrackById } from '../../../redux/selectors/entities';

const TrackInfo = () => {
  const nowPlaying = useSelector(getNowPlaying);
  const trackData = useSelector((state) => getTrackById(state, nowPlaying));

  return (
    <div className="player__track-info">
      <div className="cover-art-container">
        <img className="cover-art" src={trackData.artwork_url} alt={trackData.title} />
      </div>
      <div className="track-meta">
        <div className="track-name">{trackData.title}</div>
        <div className="artist-name">{trackData.user && trackData.user.username}</div>
      </div>
    </div>
  );
};

export default TrackInfo;
