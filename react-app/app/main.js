import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Reducer/RootReducer'
import App from './App/App'

const store = createStore(rootReducer)

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('react-app')
)