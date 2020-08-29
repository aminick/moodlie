import { useEffect, useRef } from 'react';

/**
 * Custom infinite scroll hook.
 * Execute callback based on intersection observer and fetching status.
 * @param {Object} ref
 * @param {Function} callback
 * @param {Boolean} isFetching
 */
const useInfiniteScroll = (ref, callback, isFetching) => {
  const observer = useRef(null);

  useEffect(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) callback();
      });
    }
    if (ref.current) {
      if (isFetching) observer.current.disconnect();
      else observer.current.observe(ref.current);
    }
    return () => observer.current.disconnect();
  }, [ref, observer, callback, isFetching]);
};

export default useInfiniteScroll;
