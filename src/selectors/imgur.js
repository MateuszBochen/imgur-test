
export default state => state.items.slice(0, (state.page * state.perPage) + state.perPage);
