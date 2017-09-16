const initState = {
  isLoading: true,
  item: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'SHOW_START': {
      return {
        ...state,
        item: {},
        isLoading: true,
      };
    }
    case 'SHOW_SUCCED': {
      return {
        ...state,
        isLoading: false,
        item: action.data,
      };
    }
    case 'SHOW_FAILED': {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
