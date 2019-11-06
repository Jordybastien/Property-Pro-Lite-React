import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        combineReducers,
        initialState,
        applyMiddleware(thunk)
    )
}