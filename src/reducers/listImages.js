
const initState = {
  isLoading: false,
  items: [],
  page: 0,
  perPage: 20,
  imgurPage: 0,
  section: 'hot',
  error: {},
};


export default (state = initState, action) => {
  switch (action.type) {
    case 'GALLERY_START': {
      return {
        ...state,
        page: 0,
        items: [],
        error: {},
        imgurPage: 0,
        isLoading: true,
        section: action.section,
      };
    }
    case 'GALLERY_MORE': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GALLERY_SUCCED': {
      return {
        ...state,
        isLoading: false,
        items: state.items.concat(action.data),
        imgurPage: state.imgurPage + 1,
      };
    }
    case 'GALLERY_FAILED': {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case 'CHANGE_PAGE': {
      return {
        ...state,
        page: action.page,
      };
    }
    default:
      return state;
  }
};
