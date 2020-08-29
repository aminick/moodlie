import { SET_GENRE } from '../../constants/actionTypes';
import { API_URL, CLIENT_ID } from '../../../api';
import { getTracks } from '../api';
import { getSelectedGenre, getGenrePagination } from '../../selectors/browse';

export const setGenre = (genre) => ({
  type: SET_GENRE,
  genre,
});

/**
 * Redux thunk action to get tracks data from currently selected genre.
 */
export const getTracksFromGenre = () => (dispatch, getState) => {
  const state = getState();
  const selectedGenre = getSelectedGenre(state);
  const genrePagination = getGenrePagination(state);
  const { nextHref } = genrePagination;
  const initHref = `${API_URL}/tracks?tags=${selectedGenre}&linked_partitioning=1&limit=20&offset=0&format=json&client_id=${CLIENT_ID}`;
  return dispatch(getTracks(nextHref || initHref, selectedGenre));
};
