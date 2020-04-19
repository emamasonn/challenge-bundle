import { combineReducers } from 'redux';
import createItem from './createItem'
import createBundle from './createBundle'
import listBundles from './listBundles'

export default combineReducers({
    createItem,
    createBundle,
    listBundles,
});