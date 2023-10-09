import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const countrySlice = createSlice({
  name: 'country',
  initialState: {
    country: 'mexico',
  },
  reducers: {
    setCountry(state, action: PayloadAction<string>) {
      state.country = action.payload;
    },
  },
});

export const {setCountry} = countrySlice.actions;
export default countrySlice.reducer;
