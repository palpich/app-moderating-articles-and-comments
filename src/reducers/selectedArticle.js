import {
  FETCHING_ARTICLE_BY_ID, FETCHED_ARTICLE_BY_ID,
} from '../actions'

const selectedArticle = (state = {
  isFetching: false,
  item: {},
}, action) => {
  switch (action.type) {
    case FETCHING_ARTICLE_BY_ID:
      return {
        ...state,
        isFetching: true,
      }

    case FETCHED_ARTICLE_BY_ID:
      return {
        ...state,
        isFetching: false,
        item: action.selectedArticle,
      }

    default:
      return state
  }
}

export default selectedArticle
