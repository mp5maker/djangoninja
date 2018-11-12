import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ArticleReducer from './Reducer/ArticleReducer'
import fetchArticles from './Actions/ArticleAction'
import App from './App/App'

const store = createStore(ArticleReducer, applyMiddleware(thunk))
store.dispatch(fetchArticles());

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('react-app')
)