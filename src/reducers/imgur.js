const initState = {
  isLoading: false,
  accessToken: '',
  expiresIn: 0,
  tokenType: '',
  scope: '',
  refreshToken: '',
  accountId: '',
  accountUsername: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LOGIN_SUCCED': {
      const time = new Date().getTime() / 1000;
      return {
        isLoading: false,
        accessToken: action.data.access_token,
        expiresIn: action.data.expires_in + time,
        tokenType: action.data.token_type,
        scope: action.data.scope,
        refreshToken: action.data.refresh_token,
        accountId: action.data.account_id,
        accountUsername: action.data.account_username,
      };
    }
    case 'LOGIN_FAILED': {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
