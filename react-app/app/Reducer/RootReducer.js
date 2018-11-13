import { combineReducers } from 'redux'
import ArticleReducer from './ArticleReducer'

const RootReducer = combineReducers({
    articles: ArticleReducer,
})

export default RootReducer