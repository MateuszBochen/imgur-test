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

const loadData = (dispatch, page, section) => (
  // section hot | top
  axios.get(`https://api.imgur.com/3/gallery/${section}/time/0.json?perPage=42&page=${page}`, {}).then((res) => {
    dispatch(getGalleryResponseSucced(res.data.data));
  })
    .catch(() => {
      dispatch(getGalleryResponseFailed());
    })
);

export const getGalleryResponse = (page, section) => (dispatch) => {
  loadData(dispatch, page, section);
  dispatch({
    type: 'GALLERY_START',
    section,
  });
};

export const getMoreGalleryResponse = (page, section) => (dispatch) => {
  loadData(dispatch, page, section);
  dispatch({ type: 'GALLERY_MORE' });
};

export const changePage = page => (
  {
    type: 'CHANGE_PAGE',
    page,
  });
