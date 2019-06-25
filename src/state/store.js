import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userChoices from './reducers/userChoices';
import continents from './reducers/continents';
import countries from './reducers/countries';

const store = createStore(
  combineReducers({
    userChoices,
    continents,
    countries
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
