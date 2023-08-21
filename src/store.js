import { configureStore } from '@reduxjs/toolkit';
import countReducer from './feature/countSlice';
import checkReducer from './feature/checkAnswerSlice';

export const store = configureStore({
  reducer: {
    count: countReducer,
    check: checkReducer,
  },
});

