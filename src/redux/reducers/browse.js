import { SET_GENRE, GET_TRACKS_FULFILLED, GET_TRACKS_PENDING } from '../constants/actionTypes';

const defaultState = {
  selectedGenre: 'house',
  genre: { },
};

const setGenre = (state, action) => ({ ...state, selectedGenre: action.genre });

const fetchTracks = (state) => {
  const { selectedGenre, genre } = state;
  const genrePagination = genre[selectedGenre];
  return {
    ...state,
    genre: {
      ...genre,
      [selectedGenre]: {
        ...genrePagination,
        isFetching: true,
      },
    },
  };
};

const addTracks = (state, action) => {
  const { payload } = action;
  const { genre } = state;
  const tracksById = genre[payload.genre].tracks || [];
  return {
    ...state,
    genre: {
      ...genre,
      [payload.genre]: {
        tracks: [...new Set(tracksById.concat(payload.result.collection))],
        nextHref: payload.result.next_href,
        isFetching: false,
      },
    },
  };
};

const browse = (state = defaultState, action) => {
  switch (action.type) {
    case SET_GENRE:
      return setGenre(state, action);
    case GET_TRACKS_PENDING:
      return fetchTracks(state);
    case GET_TRACKS_FULFILLED:
      return addTracks(state, action);
    default:
      return state;
  }
};

export default browse;
