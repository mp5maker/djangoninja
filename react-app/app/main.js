import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import RootReducer from './Reducer/RootReducer'
import App from './App/App'

const store = createStore(RootReducer, applyMiddleware(thunk))

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('react-app')
)