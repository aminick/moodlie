import React from 'react';
import { connect } from 'react-redux';
import TrackListRow from '../TrackListRow';
import { getGenrePagination } from '../../../redux/selectors/browse';

const TrackList = (props) => {
  const { tracksId } = props;

  return (
    <ul className="tracklist">
      {tracksId && tracksId.map((id) => <TrackListRow key={id} id={id} />)}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const genrePagination = getGenrePagination(state);

  return {
    tracksId: genrePagination.tracks,
  };
};

export default connect(mapStateToProps)(TrackList);
