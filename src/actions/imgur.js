import axios from 'axios';

const getAuthorizationResponseSucced = data => ({
  type: 'LOGIN_SUCCED',
  data,
});

const getAuthorizationResponseFailed = () => ({
  type: 'LOGIN_FAILED',
});

export const getAuthorizationResponse = code => (dispatch) => {
  const postData = {
    client_id: 'c18c3d4228441e1',
    client_secret: '265356f00098b950b1c38b588abca52564c5118f',
    grant_type: 'authorization_code',
    code,
  };

  axios.post('https://api.imgur.com/oauth2/token', postData).then((res) => {
    window.localStorage.setItem('access_token', res.data.access_token);
    dispatch(getAuthorizationResponseSucced(res.data));
  })
    .catch(() => {
      dispatch(getAuthorizationResponseFailed());
    });

  dispatch({ type: 'LOGIN_START' });
};

export const actionUseInFuture = () => (
  {
    type: 'SOME_TYPE',
  });
