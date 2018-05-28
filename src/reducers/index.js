import { combineReducers } from 'redux'
import articles from './articles'
import selectedArticle from './selectedArticle'

const rootReducer = combineReducers({
  articles,
  selectedArticle,
})

export default rootReducer
