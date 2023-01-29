import { configureStore } from '@reduxjs/toolkit';
import reducer from './slices/authSlice';

const store = configureStore({
    reducer: {
        auth: reducer
    },
});

export default store;