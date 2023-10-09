import {configureStore} from '@reduxjs/toolkit';
import countryReducer from './reducers/countryReducer';

export const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});
