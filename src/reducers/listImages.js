
const initState = {
  isLoading: false,
  items: [],
};


export default (state = initState, action) => {
  switch (action.type) {
    case 'GALLERY_START': {
      return {
        ...state,
        isLoading: true,
        items: [],
      };
    }
    case 'GALLERY_SUCCED': {
      return {
        ...state,
        isLoading: false,
        items: action.data.data,
      };
    }
    case 'GALLERY_FAILED': {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
