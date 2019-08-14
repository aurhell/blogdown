import { ADD_POST, GET_POSTS, GET_CATEGORIES, GET_TAGS } from '../constants/ActionTypes';

const initialState = {
  posts: [],
  categories: [],
  tags: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_POST) {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    });
  }

  if (action.type === GET_POSTS) {
    return Object.assign({}, state, {
      posts: action.payload
    });
  }

  if (action.type === GET_CATEGORIES) {
    return Object.assign({}, state, {
      categories: action.payload
    });
  }

  if (action.type === GET_TAGS) {
    return Object.assign({}, state, {
      tags: action.payload
    });
  }

  return state;
}

export default rootReducer;