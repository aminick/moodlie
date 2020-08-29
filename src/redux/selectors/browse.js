export const getBrowse = (state) => state.browse;

export const getSelectedGenre = (state) => getBrowse(state).selectedGenre;

export const getGenre = (state) => getBrowse(state).genre;

/**
 * Get the pagination data for the current selected Genre.
 * If no data is ready yet, return an empty object.
 * @param {Object} state
 */
export const getGenrePagination = (state) => getGenre(state)[getSelectedGenre(state)] || {};

/**
 * Get the current isFetching status for the selected genre.
 * @param {Object} state
 */
export const getGenrePaginationIsFetching = (state) => getGenrePagination(state).isFetching || false;
