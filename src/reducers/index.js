import { combineReducers } from 'redux';
import listImages from './listImages';
import showImage from './showImage';
import imgur from './imgur';
import comments from './comments';
// import pagination from './pagination';

// repositories
// sort params
// pagnation

export default combineReducers({
  listImages,
  showImage,
  imgur,
  comments,
});
