import { configureStore } from '@reduxjs/toolkit';
import StateUrlReducer from './reducers/StateUrlReducer';

const store = configureStore({
  reducer: {
    stateUrl: StateUrlReducer,
  }
});

export default store;