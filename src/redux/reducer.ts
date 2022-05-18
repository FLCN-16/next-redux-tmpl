import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import appReducer from './app/reducer';

export default combineReducers({
  app: appReducer,
});
