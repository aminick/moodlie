import React, {
  useRef, useEffect, useState, useCallback,
} from 'react';
import { formatDurationSecond } from '../../../utils/common';

const ProgressBar = (props) => {
  const { audioRef, duration } = props;
  const [currentTime, setCurrentTime] = useState(0);
  const progress = ((currentTime / duration) * 100) || 0;
  const progressRef = useRef(null);

  const handleTimeUpdate = useCallback(() => setCurrentTime(audioRef.current.currentTime), [audioRef]);

  const handleEnded = useCallback(() => setCurrentTime(0), []);

  const setAudioCurrentTime = useCallback((time) => {
    if (audioRef.current) audioRef.current.currentTime = time;
  }, [audioRef]);

  const getClickedDuration = useCallback((event) => {
    if (progressRef.current) {
      const progress = progressRef.current;
      const progressClientLeft = progress.getBoundingClientRect().left;
      const progressPercent = (event.pageX - progressClientLeft) / progress.clientWidth;
      if (progressPercent <= 0) return 0;
      if (progressPercent >= 1) return duration;
      return Math.round(progressPercent * duration);
    }
  }, [progressRef, duration]);

  const setCurrentTimeOnMouse = useCallback(
    (event) => setCurrentTime(getClickedDuration(event)),
    [getClickedDuration],
  );

  const handleMouseDown = useCallback((event) => {
    if (progressRef.current) {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      setCurrentTimeOnMouse(event);
      document.addEventListener('mousemove', setCurrentTimeOnMouse);
      document.addEventListener('mouseup',
        (event) => {
          setAudioCurrentTime(getClickedDuration(event));
          audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
          document.removeEventListener('mousemove', setCurrentTimeOnMouse);
        },
        { once: true });
    }
  }, [audioRef, getClickedDuration, handleTimeUpdate, setAudioCurrentTime, setCurrentTimeOnMouse]);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('ended', handleEnded);
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [audioRef, handleTimeUpdate, handleEnded]);

  return (
    <div className="player-control__progress-bar">
      <div>{formatDurationSecond(Math.floor(currentTime))}</div>
      <div className="progress-bar__wrapper" onMouseDown={handleMouseDown} ref={progressRef}>
        <div
          className="progress-bar__progress"
          style={{
            background: `linear-gradient(to right, #5464ff ${progress}%, #ededed 0)`,
          }}
        />
        <button
          className="progress-bar__knob"
          style={{ left: `${progress}%` }}
          type="button"
          aria-label="Progress Knob"
        />
      </div>
      <div>{formatDurationSecond(duration)}</div>
    </div>
  );
};

export default ProgressBar;
