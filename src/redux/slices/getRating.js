import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API = 'http://34.118.79.161/';

export const getRating = createAsyncThunk(
    'auth/getRating',
    async function(_, {rejectWithValue}) {
      try {
        const res = await fetch(`${API}account/rating/`)
        if(!res.ok) throw new Error('Error get rating')
        const data = await res.json()
        return data
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
);


const rating = createSlice({
    name: 'rating',
    initialState: {
        rating: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
      [getRating.pending]: (state) => {
        state.status = 'pending',
        state.error = null
      },
      [getRating.fulfilled]: (state, action) => {
        console.log(action.payload)
        state.status = 'fulfilled',
        state.rating = [...state.rating, action.payload]
      },
      [getRating.rejected]: (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
    }
    }
});

export default rating.reducer;