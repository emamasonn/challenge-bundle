import { createStore } from 'redux';
import reducerMain from '../reducers/reducers'

const store = createStore(reducerMain, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;