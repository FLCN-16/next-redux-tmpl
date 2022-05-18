import type { AnyAction, PayloadAction } from '@reduxjs/toolkit';

import { createReducer } from '@reduxjs/toolkit';
import { INITIALIZE, INITIALIZED } from './action';

// State interface
interface AppState {
  initalized: boolean;
}

// Initial state
const initialState: AppState = {
  initalized: false,
};

// Create the App reducer
const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(INITIALIZE, (state) => {
      state.initalized = false;
    })
    .addCase(INITIALIZED, (state) => {
      state.initalized = true;
    });
});

export default appReducer;
