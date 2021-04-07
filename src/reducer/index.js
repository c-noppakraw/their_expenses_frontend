import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'
import reducer from './Reducer';

const logger = createLogger({
    collapsed: true,
    diff: true,
});

const rootReducer = combineReducers({
  listsExpenses: reducer,
});

const initialState = {};

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;