const initState = {
  isLoading: false,
  items: [],
  lastLoadedId: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'COMMENTS_START': {
      return {
        ...state,
        items: [],
        isLoading: true,
      };
    }
    case 'COMMENTS_SUCCED': {
      return {
        ...state,
        isLoading: false,
        items: action.data,
        lastLoadedId: action.lastId,
      };
    }
    case 'COMMENTS_FAILED': {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
