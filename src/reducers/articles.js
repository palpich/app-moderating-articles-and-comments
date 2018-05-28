import {
  FETCHING_ARTICLES, FETCHED_ARTICLES,
} from '../actions'

const articles = (state = {
  isFetching: false,
  list: [],
}, action) => {
  switch (action.type) {
    case FETCHING_ARTICLES:
      return {
        ...state,
        isFetching: true,
      }

    case FETCHED_ARTICLES:
      return {
        ...state,
        isFetching: false,
        list: action.articles,
      }

    default:
      return state
  }
}

export default articles
