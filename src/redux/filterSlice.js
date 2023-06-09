import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload.toLowerCase();
      },
    },
  }
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getFilter = state => state.filter.filter;