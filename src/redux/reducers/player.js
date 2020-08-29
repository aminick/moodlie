import {
  PLAYER_SET_IS_PLAYING,
  PLAYER_SET_CURRENT_TRACK,
  PLAYER_AUDIO_LOADING_REQUEST,
  PLAYER_AUDIO_LOADING_SUCCESS,
  PLAYER_NEXT_TRACK,
} from '../constants/actionTypes';

const defaultState = {
  isPlaying: false,
  nowPlaying: '',
  queue: [],
  isLoading: false,
};

const setIsPlaying = (state) => ({
  ...state,
  isPlaying: !state.isPlaying,
});

const setCurrentTrack = (state, action) => ({
  ...state,
  nowPlaying: action.trackId,
});

const nextTrack = (state) => {
  if (state.queue.length === 0) return defaultState;
  return {
    ...state,
    nowPlaying: [state.queue[0]],
    queue: [...state.queue.slice(1)],
    isPlaying: false,
    isLoading: false,
  };
};

const setIsLoading = (state, isLoading) => ({
  ...state,
  isPlaying: !isLoading,
  isLoading,
});

const player = (state = defaultState, action) => {
  switch (action.type) {
    case PLAYER_SET_IS_PLAYING:
      return setIsPlaying(state);
    case PLAYER_SET_CURRENT_TRACK:
      return setCurrentTrack(state, action);
    case PLAYER_AUDIO_LOADING_REQUEST:
      return setIsLoading(state, true);
    case PLAYER_AUDIO_LOADING_SUCCESS:
      return setIsLoading(state, false);
    case PLAYER_NEXT_TRACK:
      return nextTrack(state);
    default: return state;
  }
};

export default player;
