import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const API = 'http://34.118.79.161/';

const config = {
    headers: {"Content-Type": "multipart/form-data"},
};



export const register = createAsyncThunk(
    'auth/register',
    async (form, {rejectWithValue}) => {
        try {
            await axios.post(`${API}account/register/`, form, config);
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (form) => {
        try {
            const res = await axios.post(`${API}account/login/`, form, config);
            localStorage.setItem("tokens", JSON.stringify(res.data));
            return res.data
        } catch (error) {
            console.log(error);
        }
        }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        todo: []
    },
    reducers: {},
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.todo.push(action.payload)
        }
    }
});

export default authSlice.reducer;