import { createStore, applyMiddleware } from 'redux'
//позволяет следить за всеми изменениями и экшенами которые происходят
import logger from "redux-logger"
import thunk from 'redux-thunk';
//эта штука обьеденяет наши редбюсеры в один
import rootReducer from './reducers'

export default () => {
const store = createStore(rootReducer, applyMiddleware(logger, thunk))
    return store
};