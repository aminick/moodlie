export const getEntities = (state) => state.entities;

export const getTracks = (state) => getEntities(state).tracks || {};

export const getTrackById = (state, id) => getTracks(state)[id] || {};

export const getStreamUrlById = (state, id) => getTrackById(state, id).stream_url || '';
