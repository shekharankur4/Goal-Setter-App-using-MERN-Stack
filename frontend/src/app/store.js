import { configureStore } from '@reduxjs/toolkit';
import authreducer from '../features/auth/authSlice';
import goalReducer from '../features/goals/goalSlice';

export const store = configureStore({
  reducer: {
    auth: authreducer,
    goals: goalReducer
  },
});
