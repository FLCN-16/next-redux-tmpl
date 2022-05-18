import { createAction } from '@reduxjs/toolkit';

// Defining Actions
export const INITIALIZE = 'APP:INITIALIZE';
export const INITIALIZED = 'APP:INITIALIZED';
export const START_LOADING = 'APP:START_LOADING';
export const STOP_LOADING = 'APP:STOP_LOADING';

// Create Actions
export const initialize = createAction(INITIALIZE);
export const initialized = createAction(INITIALIZED);
export const startLoading = createAction(START_LOADING);
export const stopLoading = createAction(STOP_LOADING);
