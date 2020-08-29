import React, { useRef } from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const InfiniteScroll = (props) => {
  const { isFetching, callback } = props;
  const loader = useRef(null);
  useInfiniteScroll(loader, callback, isFetching);

  return (
    <div className="infinite-scroll-loader" ref={loader}>
      {isFetching && 'Loading...'}
    </div>
  );
};

export default InfiniteScroll;
