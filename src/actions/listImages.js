import axios from 'axios';

const accessToken = window.localStorage.getItem('access_token');
if (accessToken) {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

const getGalleryResponseSucced = data => ({
  type: 'GALLERY_SUCCED',
  data,
});

const getGalleryResponseFailed = () => ({
  type: 'GALLERY_FAILED',
});

export const getGalleryResponse = page => (dispatch) => {
  axios.get(`https://api.imgur.com/3/gallery/hot/time/${page}.json`, {}).then((res) => {
    dispatch(getGalleryResponseSucced(res.data));
  })
    .catch(() => {
      dispatch(getGalleryResponseFailed());
    });

  dispatch({ type: 'GALLERY_START' });
};

export const actionUseInFuture = () => (
  {
    type: 'SOME_TYPE',
  });
