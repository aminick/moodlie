import { normalize, schema } from 'normalizr';

export const API_URL = 'https://api.soundcloud.com';
export const CLIENT_ID = '1512fb9cbe8228095fe92c6503e3a071';

const track = new schema.Entity('tracks');

const getTracks = (url, genre) => fetch(url).then((response) => {
  if (!response.ok) throw Error(response.statusText);
  return response.json();
}).then((json) => ({ genre, ...normalize(json, { collection: [track] }) }));

const api = {
  getTracks,
};

export default api;
