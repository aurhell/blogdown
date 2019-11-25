import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  RESET_POST,
  GET_CATEGORIES,
  GET_TAGS,
} from '../constants/ActionTypes'
import slugify from 'slugify'

const initialState = {
  posts: [],
  categories: [],
  tags: [],
  currentPost: null,
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_POST) {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload),
    })
  }

  if (action.type === GET_POSTS) {
    if (state.posts.length === 0) {
      return Object.assign({}, state, {
        posts: action.payload,
      })
    }
    return state
  }

  if (action.type === GET_POST) {
    let currentPost = null
    const slug = action.payload
    if (slug !== null) {
      currentPost = state.posts.find(el => slugify(el.title) === slug)
    }

    return Object.assign({}, state, {
      currentPost: currentPost,
    })
  }

  if (action.type === RESET_POST) {
    return Object.assign({}, state, {
      currentPost: null,
    })
  }

  if (action.type === GET_CATEGORIES) {
    return Object.assign({}, state, {
      categories: action.payload,
    })
  }

  if (action.type === GET_TAGS) {
    return Object.assign({}, state, {
      tags: action.payload,
    })
  }

  return state
}

export default rootReducer
