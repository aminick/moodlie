import {
  useState, useEffect, useCallback, useRef,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setIsPlaying,
  audioLoadingRequest,
  audioLoadingSuccess,
  nextTrack,
} from '../redux/actions/player';
import { getPlayerIsPlaying, getNowPlaying, getPlayerIsLoading } from '../redux/selectors/player';
import { getStreamUrlById } from '../redux/selectors/entities';
import { setApiCredentials } from '../utils/api';

const useAudioControl = () => {
  const audioRef = useRef(null);
  const isPlaying = useSelector(getPlayerIsPlaying);
  const nowPlayingUrl = useSelector((state) => {
    const nowPlaying = getNowPlaying(state);
    const streamUrl = getStreamUrlById(state, nowPlaying);
    if (streamUrl) return setApiCredentials(streamUrl);
    return '';
  });
  const isLoading = useSelector(getPlayerIsLoading);
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);

  const handleLoadedData = useCallback((event) => {
    setDuration(event.target.duration);
    dispatch(audioLoadingSuccess());
  }, [dispatch]);

  const handleEnded = useCallback(() => dispatch(nextTrack()), [dispatch]);

  const setAudioRef = useCallback((node) => {
    if (node) {
      node.addEventListener('loadeddata', handleLoadedData);
      node.addEventListener('ended', handleEnded);
    }
    audioRef.current = node;
  }, [handleLoadedData, handleEnded]);

  useEffect(
    () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        if (nowPlayingUrl) {
          dispatch(audioLoadingRequest());
          audioRef.current.src = nowPlayingUrl;
        } else {
          audioRef.current.src = '';
          setDuration(0);
        }
      }
    }, [audioRef, nowPlayingUrl, dispatch],
  );

  useEffect(
    () => {
      if (audioRef.current) {
        if (isPlaying) audioRef.current.play();
        else audioRef.current.pause();
      }
    }, [audioRef, isPlaying],
  );

  useEffect(
    () => () => {
      if (audioRef.current) {
        audioRef.current.removeEventListner('loadeddata', handleLoadedData);
        audioRef.current.removeEventListner('ended', handleEnded);
      }
    }, [audioRef, handleLoadedData, handleEnded],
  );

  return {
    duration,
    isLoading,
    isPlaying,
    audioRef,
    setAudioRef,
    setIsPlaying: () => dispatch(setIsPlaying()),
  };
};

export default useAudioControl;
