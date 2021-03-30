import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE  
} from '../actions/type';


const initialState = {
  text: '',
  movies: [],
  movie: []
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
}
