import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL, HTTP_STATUS } from '@constants';
import uuidv4 from '@helpers';
import { UsersState } from '@types';

export const name = 'users';

export const getAllUsers = createAsyncThunk(`${name}/getAllUsers`, async () => {
  const { data } = await axios.get(`${BASE_URL}/users?page=1`);
  return data;
});

const initialState: UsersState = {
  data: {
    page: 1,
    per_page: 6,
    total: 0,
    total_pages: 0,
    data: [],
    support: {
      url: '',
      text: '',
    },
  },
  loading: null,
};

const usersReducer = createSlice({
  name,
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: uuidv4(),
        email: `dummy@sample.com`,
        first_name: action.payload.name,
        last_name: `Doe`,
        job: action.payload.job,
        avatar: `https://placehold.co/135x135`,
      };
      state.data.data.push(newUser);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = HTTP_STATUS.PENDING;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.loading = HTTP_STATUS.FULFILLED;
        state.data = payload;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.loading = HTTP_STATUS.REJECTED;
      });
  },
});

export const { addUser } = usersReducer.actions;
export default usersReducer.reducer;
