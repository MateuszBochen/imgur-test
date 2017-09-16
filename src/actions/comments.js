import axios from 'axios';

const accessToken = window.localStorage.getItem('access_token');
if (accessToken) {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

const getCommentsResponseSucced = (data, lastId) => ({
  type: 'COMMENTS_SUCCED',
  data,
  lastId,
});

const getCommentsResponseFailed = () => ({
  type: 'COMMENTS_FAILED',
});

const loadData = (dispatch, isAlbum, id) => {
  const album = isAlbum ? 'album' : 'image';

  axios.get(`https://api.imgur.com/3/gallery/${album}/${id}/comments`, {}).then((res) => {
    dispatch(getCommentsResponseSucced(res.data.data, id));
  })
    .catch(() => {
      dispatch(getCommentsResponseFailed());
    });
};

export const getCommentsResponse = (isAlbum, id) => (dispatch) => {
  loadData(dispatch, isAlbum, id);
  dispatch({
    type: 'COMMENTS_START',
  });
};

export const useInFuture = () => (dispatch) => {
  dispatch({
    type: 'COMMENTS_SOME',
  });
};
