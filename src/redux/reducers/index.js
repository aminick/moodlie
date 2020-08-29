import { combineReducers } from 'redux';
import browse from './browse';
import entities from './entities';
import player from './player';

export default combineReducers({
  browse,
  player,
  entities,
});
