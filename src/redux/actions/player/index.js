import {
  PLAYER_SET_IS_PLAYING,
  PLAYER_SET_CURRENT_TRACK,
  PLAYER_AUDIO_LOADING_REQUEST,
  PLAYER_AUDIO_LOADING_SUCCESS,
  PLAYER_AUDIO_LOADING_FAILURE,
  PLAYER_NEXT_TRACK,
} from '../../constants/actionTypes';

export const setIsPlaying = () => ({
  type: PLAYER_SET_IS_PLAYING,
});

export const setCurrentTrack = (id) => ({
  type: PLAYER_SET_CURRENT_TRACK,
  trackId: id,
});

export const audioLoadingRequest = () => ({
  type: PLAYER_AUDIO_LOADING_REQUEST,
});

export const audioLoadingSuccess = () => ({
  type: PLAYER_AUDIO_LOADING_SUCCESS,
});

export const audioLoadingFailure = () => ({
  type: PLAYER_AUDIO_LOADING_FAILURE,
});

export const nextTrack = () => ({
  type: PLAYER_NEXT_TRACK,
});
