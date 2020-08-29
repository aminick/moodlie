import React from 'react';
import { faStepBackward, faStepForward, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons';

import useAudioControl from '../../../hooks/useAudioControl';

import ControlButton from '../ControlButton';
import ProgressBar from '../ProgressBar';

const PlayerControl = () => {
  const {
    duration,
    isPlaying,
    isLoading,
    audioRef,
    setAudioRef,
    setIsPlaying,
  } = useAudioControl();

  return (
    <div className="player-control">
      <audio ref={setAudioRef}>
        Your browser does not support the
        <code>audio</code>
        element.
      </audio>
      <div className="player-control__control-buttons">
        <ControlButton size="small" icon={faStepBackward} ariaLabel="Previous Track" />
        <ControlButton
          size="regular"
          icon={isLoading ? faSpinner : (isPlaying ? faPauseCircle : faPlayCircle)}
          ariaLabel="Play or Pause"
          onClick={setIsPlaying}
        />
        <ControlButton size="small" icon={faStepForward} ariaLabel="Next Track" />
      </div>
      <ProgressBar
        audioRef={audioRef}
        duration={duration}
      />
    </div>
  );
};

export default PlayerControl;
