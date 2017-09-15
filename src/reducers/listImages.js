
const initState = {
  isLoading: false,
  items: [],
  page: 0,
  perPage: 20,
  imgurPage: 0,
};


export default (state = initState, action) => {
  switch (action.type) {
    case 'GALLERY_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GALLERY_SUCCED': {
      console.log('zaladowalo nowe zapi');
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
      };
    }
    case 'CHANGE_PAGE': {
      console.log(action);
      return {
        ...state,
        page: action.page,
      };
    }
    default:
      return state;
  }
};
