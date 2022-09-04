import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const contactsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add(state, action) {
      state.includes(action.payload.name.toLowerCase())
        ? alert(`${state.name} is already in contacts`)
        : state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter(state, action) {
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    items: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],

  devTools: process.env.NODE_ENV === 'development',
});

export const { add, remove } = contactsSlice.actions;
export const { filter } = filterSlice.actions;
