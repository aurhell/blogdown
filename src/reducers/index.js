import {
  ADD_ARTICLE,
  GET_ARTICLES,
  GET_ARTICLE,
  RESET_ARTICLE,
  GET_CATEGORIES,
  GET_TAGS,
} from '../constants/ActionTypes'
import slugify from 'slugify'

const initialState = {
  articles: [],
  categories: [],
  tags: [],
  currentArticle: null,
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
    })
  }

  if (action.type === GET_ARTICLES) {
    if (state.articles.length === 0) {
      return Object.assign({}, state, {
        articles: action.payload,
      })
    }
    return state
  }

  if (action.type === GET_ARTICLE) {
    let currentArticle = null
    const slug = action.payload
    if (slug !== null) {
      currentArticle = state.articles.find(el => slugify(el.title) === slug)
    }

    return Object.assign({}, state, {
      currentArticle: currentArticle,
    })
  }

  if (action.type === RESET_ARTICLE) {
    return Object.assign({}, state, {
      currentArticle: null,
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
