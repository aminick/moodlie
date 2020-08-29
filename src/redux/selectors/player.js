export const getPlayer = (state) => state.player;

export const getPlayerIsPlaying = (state) => getPlayer(state).isPlaying;

export const getNowPlaying = (state) => getPlayer(state).nowPlaying;

export const getPlayerIsLoading = (state) => getPlayer(state).isLoading;
