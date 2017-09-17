import axios from 'axios';

const accessToken = window.localStorage.getItem('access_token');
if (accessToken) {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

const getImageResponseSucced = data => ({
  type: 'SHOW_SUCCED',
  data,
});

const getImageResponseFailed = error => ({
  type: 'SHOW_FAILED',
  error,
});

const loadData = (dispatch, hash) => {
  const album = hash.length > 5 ? 'image' : 'album';

  axios.get(`https://api.imgur.com/3/gallery/${album}/${hash}`, {}).then((res) => {
    dispatch(getImageResponseSucced(res.data.data));
  })
    .catch((error) => {
      dispatch(getImageResponseFailed(error.response.data));
    });
};

export const getImageResponse = hash => (dispatch) => {
  loadData(dispatch, hash);
  dispatch({
    type: 'SHOW_START',
  });
};

export const useInFuture = () => (dispatch) => {
  dispatch({
    type: 'SHOW_SOME',
  });
};
