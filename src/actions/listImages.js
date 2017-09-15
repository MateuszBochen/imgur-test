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
  axios.get(`https://api.imgur.com/3/gallery/hot/time/0.json?perPage=42&page=${page}`, {}).then((res) => {
    dispatch(getGalleryResponseSucced(res.data.data));
  })
    .catch(() => {
      dispatch(getGalleryResponseFailed());
    });

  dispatch({ type: 'GALLERY_START' });
};

export const changePage = page => (
  {
    type: 'CHANGE_PAGE',
    page,
  });
