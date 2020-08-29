import React from 'react';
import { connect } from 'react-redux';
import { setGenre, getTracksFromGenre } from '../../redux/actions/browse';

import TabMenu from './TabMenu';
import TrackList from './TrackList';
import InfiniteScroll from '../InfiniteScroll';
import { getGenrePaginationIsFetching } from '../../redux/selectors/browse';

const Browse = ({ isFetching, getTracksFromGenre }) => (
  <div className="container">
    <TabMenu />
    <TrackList />
    <InfiniteScroll isFetching={isFetching} callback={getTracksFromGenre} />
  </div>
);

const mapStateToProps = (state) => ({
  isFetching: getGenrePaginationIsFetching(state),
});

const mapDispatchToProps = {
  setGenre,
  getTracksFromGenre,
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
