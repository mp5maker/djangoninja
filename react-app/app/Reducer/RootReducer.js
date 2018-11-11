import { combineReducers } from 'redux'
import { articleListReducer } from './ArticleListReducer'

const rootReducer = combineReducers({
    articleList: articleListReducer
})

export default rootReducer