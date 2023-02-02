import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCourses = createAsyncThunk(
  'genres/getCourses',
  async function(_, {rejectWithValue}) {
    try {
      const res = await fetch(`http://34.118.79.161/cours/crud-cours/`)

      if(!res.ok) throw new Error('Error get Genres')

      const data = await res.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const CoursesById = createAsyncThunk(
  'genres/CoursesById',
  async function(id, {rejectWithValue}) {
    try {
      const res = await fetch(`http://34.118.79.161/cours/crud-cours/${id}`)

      if(!res.ok) throw new Error('Error get Genres')

      const data = await res.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)


const courses = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    status: null,
    error: null,
    id: null,
  },
  extraReducers: {
    [getCourses.pending]: (state) => {
      state.status = 'pending'
      state.error = null
    },
    [getCourses.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.courses = [...action.payload]
    },
    [getCourses.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [CoursesById.pending]: (state) => {
      state.status = 'pending'
      state.error = null
    },
    [CoursesById.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.id = {...action.payload}
    },
    [CoursesById.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  }
})

export default courses.reducer