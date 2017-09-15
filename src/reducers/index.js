import { combineReducers } from 'redux';
import listImages from './listImages';
import imgur from './imgur';
// import pagination from './pagination';

// repositories
// sort params
// pagnation

export default combineReducers({
  listImages,
  imgur,
});
