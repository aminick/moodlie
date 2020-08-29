import React from 'react';
import { connect } from 'react-redux';
import { setCurrentTrack } from '../../../redux/actions/player';
import { getTrackById } from '../../../redux/selectors/entities';
import { formatDurationMillisecond } from '../../../utils/common';

const TrackListRow = (props) => {
  const {
    id, title, username, duration,
  } = props;
  const { setCurrentTrack } = props;

  return (
    <li className="tracklist__row" onClick={() => setCurrentTrack(id)}>
      <div className="tracklist__col name">
        <div>
          <div className="tracklist__name">{title}</div>
          <div className="tracklist__artist">{username}</div>
        </div>
      </div>
      <div className="tracklist__col duration">{duration}</div>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const track = getTrackById(state, id);
  const { title, user, duration } = track;

  return {
    id,
    title,
    username: user.username,
    duration: formatDurationMillisecond(duration),
  };
};

const mapDispatchToProps = {
  setCurrentTrack,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackListRow);
