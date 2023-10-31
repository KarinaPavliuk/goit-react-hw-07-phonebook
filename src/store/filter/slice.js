import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    handleFilterChanges: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
    },
  },
});

export const { handleFilterChanges } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
