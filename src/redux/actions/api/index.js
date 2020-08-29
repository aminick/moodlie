import { GET_TRACKS } from '../../constants/actionTypes';
import api from '../../../api';

export const getTracks = (url, genre) => ({
  type: GET_TRACKS,
  payload: api.getTracks(url, genre),
});
