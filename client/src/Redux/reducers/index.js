const initialState = {
  pokes: [], //copia burda para hacerle magia
  allPokes: [],
  types: [],
  pokeDetail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKES":
      return {
        ...state,
        pokes: action.payload,
        allPokes: action.payload,
      };
    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };
    case "GET_QUERY":
      return {
        ...state,
        allPokes: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        pokeDetail: action.payload,
      };
    case "POST_POKE":
      return {
        ...state,
      };
    case "DELETE_BY_ID":
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}
export default rootReducer;
